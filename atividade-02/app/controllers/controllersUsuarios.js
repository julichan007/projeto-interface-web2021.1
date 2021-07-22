const Usuario = require("../models/usuarioModel")
const Post =  require("../models/postModel")
const ViewPost = require("../views/viewsPosts")
const View = require("../views/viewsUsuarios")

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    let promise = Usuario.create(usuario);

    promise.then(
        function(usuario){
            res.status(201).json(View.render(usuario))
        }
    ).catch(
        function(error){
            res.status(400).json({
                mensagem: "Deu erro, tente novamente", error: error
            })
        }
    )
}

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec()
    promise.then(
        function(usuario){
            res.status(200).json(View.renderMany(usuario))
        }
    ).catch(
        function(error){
            res.status(500).json({
                mensagem: "Nao foi possivel listar", error: error
               
            })
        console.log(error)
        }
    )
}

module.exports.buscarUsuarios = function(req, res){
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

module.exports.removerUsuario = function(req, res){
    let id_ = req.params.id
    let promise = Usuario.findByIdAndDelete(id_)

    promise.then(
        function(usuario){
            res.status(200).json(View.render(usuario))
        }
    ).catch(
        function(error){
            res.status(400).json({
                mensagem: "Não foi possivel deletar", error: error
            })
        }
    )
}

module.exports.obterPostUsuario =  function(req, res){
    let id_usuario = req.params.id
    let promise = Post.find({id_usuario: id_usuario})

    promise.then(
        function(post){
            res.json(ViewPost.renderMany(post))
        }
    ).catch(
        function(error){
            res.status(404).json({
                mensagem: "Nao encontrado.", error: error
            })
        }
    )
}