const controller = require("../controllers/controllersUsuarios");

module.exports = function(app){
    app.get("/api/usuarios", controller.listarUsuarios);

    app.get("/api/usuarios", controller.buscarUsuarios);

    app.post("/api/usuarios", controller.inserirUsuarios);

    app.delete("/api/usuarios/;id",controller.removerUsuarios);

    app.get("/api/usuarios", controller.obterUsuarios);
}