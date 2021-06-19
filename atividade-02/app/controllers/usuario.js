const Usuario = require("../models/usuario")
const Post = require("../models/post")
const ViewPost = require("../views/posts")
const View = require("../views/usuarios")

module.exports.listarUsuarios =  function(req, res){
    let promise = Usuario.find().exec()
    promise.then(
        function(usuarios){
            res.status(200).json(View.renderMany(usuarios))
        }
    ).catch(
        function(error){
            res.status(500).json({
                mensagem: "Nao foi possivel listar", error: error
            })
        }
    )
}

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body
    let promise = Usuario.create(usuario)

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
        function(posts){
            res.json(ViewPost.renderMany(posts))
        }
    ).catch(
        function(error){
            res.status(404).json({
                mensagem: "Nao encontrado.", error: error
            })
        }
    )
}