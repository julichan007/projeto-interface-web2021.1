const posts = require("../routes/routesPosts");

module.exports.render = function(post){
    return{
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        id_usuario: post.id_usuario
    }
}
module.exports.renderMany = function(post){
    return posts.map(render)
}