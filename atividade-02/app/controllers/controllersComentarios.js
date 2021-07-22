const Comentario = require("../models/comentarioModel")
const ViewsComentario = require("../views/viewsComentarios")

//listar comentarios
module.exports.listarComentarios =  function(req,res){
    
    let promise = Comentario.find().exec();

    promise.then(
        function(post){
            res.status(200).json(ViewsComentario.renderMany(post))
        }  
    ).catch(
        function (error){
            res.status(500).json({
                mensagem:"Não foi possivel listar os comentarios.", error: error
            })
        }
    )
}
//buscar comentarios por id
module.exports.buscarComentarios = function(req, res){
    let id_ = req.params.id
    let promise = Comentario.findById(id_).exec()

    promise.then(
        function(comentario){
            res.status(200).json(ViewsComentario.render(comentario))
        }
    ).catch(
        res.status(400).json({
            mensagem: "Comentario não encontrado.", error:error
        })
    )
}
//inserir comentário
module.exports.inserirComentarios = function(req, res){
    let promise = Comentario.create(req.body)

    promise.then(
        function(comentario){
            res.status(201).json(ViewsComentario.render(comentario))
        }
    ).catch(
        function(error){
            res.status(500).json({
                mensagem:"Não foi possivel inserir um comentario", error: error
            })
        }
    )
}
module.exports.deleteComentarios = function(req, res){
    let id_ = req.params.id
    let promise = Comentario.findByIdAndDelete(id_)

    promise.then(
        function(post){
            res.status(200).json(ViewsComentario.render(post))
        }
    ).catch(
        function(error){
            res.status(400).json({
                mensagem: "Não foi possivel deletar o comentario", error: error
            })
        }
    )
}

