var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	var id_comodo=req.params.id;
	connection.query('SELECT dispositivo.descricao, atuador.* from dispositivo join atuador on (dispositivo.id_dispositivo=atuador.id_dispositivo) where atuador.id_comodo =' + id_comodo , function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify(results));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

router.post('/cadastrarAtuador', function(req, res, next) {
        var tipo = req.body.tipo;
        var estado = req.body.estado;
        var descricao = req.body.descricao;
        var icone = req.body.icone;
        var id_comodo = req.body.id_comodo;
	var id_dispositivo = req.body.id_dispositivo;
console.log(req.body);
        connection.query('INSERT INTO atuador (tipo, estado, descricao, icone, id_comodo, id_dispositivo) VALUES (?,?,?,?,?,?)',[tipo,estado,descricao,icone,id_comodo,id_dispositivo], function (error, result) {
                if(error){
                        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                        //If there is error, we send the error in the error section with 500 status
                } else {
                        res.send(JSON.stringify({"status": 200, "error": null, "response": result.insertId}));
                        //If there is no error, all is good and response is 200OK.
                }
        });
});
module.exports = router;
