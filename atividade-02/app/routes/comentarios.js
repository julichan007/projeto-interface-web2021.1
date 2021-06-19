const controller = require("../controllers/comentarios");

module.exports = function(app){
    app.get("/comentarios", controller.listarComentarios);
    app.post("/comentarios", controller.inserirComentarios);
    app.get("/comentarios/:id", controller.BuscarComentarios);
    app.delete("/comentarios", controller.deleteComentarios);

}

