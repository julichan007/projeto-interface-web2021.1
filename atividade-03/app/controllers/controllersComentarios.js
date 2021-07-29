const Comentario = require("../models/comentarioModel")
const ViewsComentario = require("../views/viewsComentarios")

//listar comentarios
module.exports.listarComentarios =  function(req,res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;


    let promise = Comentario.find({id_usuario: id_usuario_logado}).exec();

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
    let texto = req.body.texto;
    let id_post = req.body.id_post;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;
    

    let promise = Comentario.create({texto: texto, id_post: id_post, id_usuario: id_usuario_logado});

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
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;


    //let promise = Comentario.findByIdAndDelete(id)
    let promise = Comentario.findById(id).exec();
    promise.then(
        function(comentario){
            if(id_usuario_logado == comentario.id_usuario){
                Comentario.findByIdAndDelete(id).exec()
                .then(function(comentario){
                    res.status(200).json(ViewComentario.render(comentario));
                })
                .catch(function(erro){
                    res.status(404).json({
                          mensagem:" Comentário não encontrado! Tente novamente!"
                        });
                    })
                } else {
                    res.status(403).json({
                        mensagem: "Usuario não autorizado!"
                    });
                }
            
            }).catch(
                function(error){
                       res.status(404).json({
                           mensagem: "Não foi possivel deletar o comentario", error: error
            });
        
    })
}