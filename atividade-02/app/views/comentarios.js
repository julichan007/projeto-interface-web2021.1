const comentarios = require("../routes/comentarios")

module.exports.render = function(comentario){
    return{
        id: comentario._id,
        texto: comentario.texto,
        id_post: comentario.id_post,
        id_usuario: comentario.id_usuario
        
    }

}
module.exports.renderMany = function(comentarios){
    return comentarios.map(render)
}