function render(post){
    return{
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        id_usuario: post.id_usuario
    }
}

module.exports.render = render;

 function renderMany(post){
    return posts.map(render)
}
module.exports.renderMany = renderMany;