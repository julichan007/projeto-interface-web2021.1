const controller = require("../controllers/controllersComentarios");

module.exports = function(app){
    app.get("/api/controllersComentarios",controller.listarComentarios);
    app.get("/api/controllersComentarios/:id", controller.buscarComentarios);
    app.post("/api/controllerComentarios", controller.inserirComentarios);
    app.delete("/api/controllersComentarios", controller.deleteComentarios);
    
}