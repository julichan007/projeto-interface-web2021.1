const comentarios = require("../routes/routesComentario")

module.exports.render = function(comentario){
    return{
        id: comentario._id,
        texto: comentario.texto,
        id_post: comentatio.id_post,
        id_usuario: comentario.id_usuario
    }
}
module.exports.renderMany = function(comentarios){
    return comentarios.map(render)
}