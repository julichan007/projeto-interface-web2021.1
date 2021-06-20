const Post = require("../models/postModel")
const ViewPost = require("../views/viewsPosts")
const Comentario = require("../models/comentarioModel")
const ViewComentario = require("../views/viewsComentarios")

module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();

    promise.then(
        function(posts){
            res.status(200).json(ViewPost.renderMany(posts))
        }
    ).catch(
        function (error){
            res.status(500).json({
                mensagem: "Não foi possivel listar os posts", error: error
            })
        }
    )
}

module.exports.buscarPost = function(req,res){
    let id_ = req.params.id
    let promise  = Post.findById(id_).exec()

    promise.then(
        function(post){
            res.status(200).json(ViewPost.render(post))
        }
    ).catch(
        function(error){
            res.status(400).json({
                mensagem: "Não encontrado", error: error
            })
        }
    )
}

module.exports.inserirPost = function(req, res){
    let promise = Post.create(req.body)

    promise.then(
        function(post){
            res.status(201).json(ViewPost.render(post))
        }
    ).catch(
        function(error){
            res.status(500).json({
                mensagem: "Não foi possivel inserir", error: error
            })
        }
    )
}
module.exports.obterComentarioID = function(req, res){
    let idPost = req.params.id
    let promise = Comentario.find({id_post: idPost}).exec()

    promise.then(
        function(comentario){
            res.json(ViewComentario.renderMany(comentarios))
        }
    ).catch(
        function(error){
            res.status(404).json({
                mensagem: "Comentarios nao encontrado", error: error
            })
        }
    )
}
module.exports.deletePost = function(req, res){
    let id_ = req.params.id
    let promise = Post.findByIdAndDelete(id_)

    promise.then(
        function(post){
            res.status(200).json(ViewPost.render(post))
        }
    ).catch(
        function(error){
            res.status(400).json({
                mensagem: "Não foi possivel deletar", error: error
            })
        }
    )
}