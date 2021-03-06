const bcrypt = require("bcrypt")
const Usuario = require ("../models/usuarioModel")
const jwt = require("jsonwebtoken")

module.exports.logar = function(req, res){
    Usuario.findOne({ email: req.body.email })
        .then(function(usuario){
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token  = jwt.sign({id:usuario.id}, "senha_secreta" )
                //console.log(token);
                res.status(200).json({token: token});
            }else{
                res.status(401).send("Cadastro não encontrado");
            }
        })
        .catch(function(error){
            res.status(401).send("Cadastro não encontrado");
        })
}

module.exports.checar = function(req,res, next){
    let token = req.headers.token;
    jwt.verify(token,"senha_secreta", function(err, decoded){
        if(err){
            res.status(401).send("Token invalido!");
        }
        next();
    })
}
