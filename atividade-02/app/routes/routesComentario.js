const controller = require("../controllers/controllersComentarios");

module.exports = function(app){
    app.get("/api/comentarios",controller.listarComentarios);
    app.get("/api/comentarios/:id", controller.buscarComentarios);
    app.post("/api/comentarios", controller.inserirComentarios);
    app.delete("/api/comentarios", controller.deleteComentarios);
    
}