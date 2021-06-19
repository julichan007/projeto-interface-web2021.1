const controller = require("../controllers/usuario")

module.exports = function(app){
    app.get("./api/usuarios",controller.listarUsuarios);

    app.get("/api/usuarios/:id", controller.buscarUsuarios);

    app.post("/api/usuarios", controller.inserirUsuario);

    app.delete("/api/usuario/:id", controller.removerUsuario);

    app.get("/api/usuarios/:id/posts", controller.obterPostUsuario)
}