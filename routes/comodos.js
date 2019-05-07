var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/:id', function(req, res, next) {
        var id_local=req.params.id;
        connection.query('SELECT * from comodos where id_local='+id_local, function (error, results, fields){
                if(error){
                        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                        //If there is error, we send the error in the error section with 500 status
                } else {
                        res.send(JSON.stringify(results));
                        //If there is no error, all is good and response is 200OK.
                }
        });
});

router.post('/cadastrarComodo', function(req, res, next) {
        var descricao = req.body.descricao;
	var id_local = req.body.id_local;
console.log(req.body);
        connection.query('INSERT INTO comodos (descricao, id_local) VALUES (?,?)',[descricao,id_local], function (error, result) {
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




