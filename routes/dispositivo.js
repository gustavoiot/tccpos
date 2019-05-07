var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/:id_comodo',function(req, res, next) {
        var id_comodo=req.params.id;
        connection.query('SELECT * from dispositivo where id_comodo='+id_comodo, function (error, results, fields){
                if(error){
                        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                        //If there is error, we send the error in the error section with 500 status
                } else {
                        res.send(JSON.stringify(results));
                        //If there is no error, all is good and response is 200OK.
                }
        });
});
router.post('/cadastrarDispositivo', function(req, res, next) {
        var descricao = req.body.descricao;
        var id_comodo = req.body.id_comodo;
console.log(req.body);
        connection.query('INSERT INTO dispositivo (descricao, id_comodo) VALUES (?,?)',[descricao,id_comodo], function (error, result) {
                if(error){
                        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                        //If there is error, we send the error in the error section with 500 status
                } else {
                        res.send(JSON.stringify({"status": 200, "error": null, "response": result.insertId, "id_comodo":id_comodo}));
                        //If there is no error, all is good and response is 200OK.
                }
        });
});
module.exports = router;
