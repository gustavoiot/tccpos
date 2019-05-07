var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	var id_usuario=req.params.id;
	connection.query('SELECT * from local l  join usuario_has_local ul on (l.id_local=ul.id_local) where ul.id_usuario='+id_usuario, function (error, results, fields) {
	  	if(error){

	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
			res.send(JSON.stringify(results));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

router.post('/cadastrarLocal/', function(req, res, next) {
	
	var descricao = req.body.descricao;
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;
	var id_usuario = req.body.id_usuario;

console.log(req.body);	
	connection.query('INSERT INTO local (descricao, latitude, longitude) VALUES (?,?,?)',[descricao,latitude,longitude], function (error, result) {
		if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
 
  			//If there is no error, all is good and response is 200OK.
	  		connection.query('INSERT INTO usuario_has_local (id_local, id_usuario) VALUES (?,?)',[result.insertId,id_usuario], function (error, result){
                		if(error){
                        		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                        		//If there is error, we send the error in the error section with 500 status
                		} else {
                        		//res.send(JSON.stringify({"status": 200, "error": null, "response": result.insertId}));
                        		//If there is no error, all is good and response is 200OK.
                		}
        		});
			res.send(JSON.stringify({"status": 200, "error": null, "response": result.insertId}));
		}
  	});
});
module.exports = router;

