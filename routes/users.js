var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:nome/:senha', function(req, res, next) {
	var nome =req.params.nome;
	var senha=req.params.senha;
	console.log(nome);
	console.log(senha);
	connection.query('SELECT usuario.id_usuario from usuario where nome="'+nome+'" and senha="'+senha+'"', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify(results));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


router.post('/cadastrarUsuario', function(req, res, next) {
        var senha = req.body.senha;
        var nome = req.body.nome;
        var email = req.body.email;
	var sexo = req.body.sexo;
	dta_nascimento = req.body.dta_nascimento;
console.log(req.body);
        connection.query('INSERT INTO usuario (senha, nome, email, sexo, dta_nascimento) VALUES (?,?,?,?,?)',[senha,nome,email,sexo,dta_nascimento], function (error, result) { 
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
