const usuarios = require("../routes/routesUsuarios")

module.exports.render =  function(usuario){
    return{
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email
    }
}
module.exports.renderMany = function(usuario){
    return usuarios.map(render)
}