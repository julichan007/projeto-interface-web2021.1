const Usuario = require("../models/usuarioModel");
const Post =  require("../models/postModel");
const ViewPost = require("../views/viewsPosts");
const View = require("../views/viewsUsuarios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.getAllUsuarios = function(req, res){
    let promise = Usuario.find().exec()
    promise.then(
        function(usuarios){
            res.status(200).json(View.renderMany(usuarios))
        }
    ).catch(
        function(error){
            res.status(500).json({
                mensagem: "Nao foi possovel listar", error: error
               
            })
        console.log(error)
        }
    )
}

module.exports.getUsuariobyId = function(req, res){
    let id_ = req.params.id
    let promise = Usuario.findById(id_).exec()

    promise.then(
        function(usuario){
            res.json(View.render(usuario))
        }
    ).catch(
        function(error){
            res.status(404).json({
                mensagem: "Usuario nao encontrado", error: error
            })
        }
    )
}

module.exports.inserirUsuario = function(req, res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        //senha: req.body.senha,
         senha: bcrypt.hashSync (req.body.senha, 10),
    };
    
    let promise = Usuario.create( usuario );
    
    promise.then( 
        function( usuario ){
            res.status( 201 ).json( View.render( usuario ) );
        }
    ).catch(
        function( error ){
            res.status(400).json( { mensagem: "Deu erro, tente novamente" } );
        }
    )
}

module.exports.removerUsuario = function(req, res){
    let id_ = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    if(id_usuario_logado != id){
        res.status(403).json({
            mensagem:"Acesso negado!"
        });
    }

    let promise = Usuario.findByIdAndRemove(id).exec();
    promise.then(function(usuario){
        res.status(200).json(View.render(usuario));
    }).catch(function(error){
        res.status(403).json({
            mensagem: "Acesso negado!", error: error
        });
    })
}

module.exports.obterPostUsuario =  function(req, res){
    let id = req.params.id;
    let promise = Post.find({id_usuario: id}).exec();
    promise.then(
        function(posts){
            res.json(ViewPost.renderMany(posts));
        }
    ).catch(
        function(error){
            res.status(404).json({
                mensagem: "Nao encontrado.", error: error
            })
        }
    )
}