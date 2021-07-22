const controller = require("../controllers/controllersUsuarios");

module.exports = function(app){
    app.get("/usuarios", controller.listarUsuarios);

    app.get("/usuarios", controller.buscarUsuarios);

    app.post("/usuarios", controller.inserirUsuario);

    app.delete("/usuarios/:id",controller.removerUsuario);

    app.get("/usuarios/:id/post", controller.obterPostUsuario);
}