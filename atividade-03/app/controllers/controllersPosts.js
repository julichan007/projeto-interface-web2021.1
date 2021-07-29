const Post = require("../models/postModel");
const ViewPost = require("../views/viewsPosts");
const Comentario = require("../models/comentarioModel");
const ViewComentario = require("../views/viewsComentarios");
const jwt = require("jsonwebtoken");



module.exports.inserirPost = function(req, res){
    let texto = req.body.texto;
    let likes = req.body.likes;
    
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;


    let promise = Post.create({
        texto: texto, 
        likes: likes, 
        id_usuario: id_usuario_logado
    });
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

module.exports.listarPosts = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.find({id_usuario: id_usuario_logado}).exec();

    promise.then(
        function(post){
            res.status(200).json(ViewPost.renderMany(post))
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
    let id = req.params.id
    let promise  = Post.findById(id).exec()

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

module.exports.obterComentarioID = function(req, res){
    let idPost = req.params.id
    let promise = Comentario.find({id_post: idPost}).exec()

    promise.then(
        function(post){
            res.status(200).json(ViewComentario.renderMany(post));
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
    let id = req.params.id;
    
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    //let promise = Post.findByIdAndDelete(id)
    let promise = Post.findById(id).exec();
    promise.then(
        function(post){
            //res.status(200).json(ViewPost.render(post))
            if(post.id_usuario == id_usuario_logado){
                Post.findByIdAndDelete(id)
                .then(function(post){
                    res.status(200).json(ViewPost.render(post));
                })
                .cath(function(erro){
                    res.status(400).json({
                        mensagem: "Post não encontrado!"
                    });
                })
            }else{
                res.status(403).json({
                    mensagem:"Usuario não autorizado!"
                });
            }
        }).catch(
            function(error){
                res.status(400).json({
                    mensagem: "Não foi possivel deletar", error: error
            })
        }
    )
}