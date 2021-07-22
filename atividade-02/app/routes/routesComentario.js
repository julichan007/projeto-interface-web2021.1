const controller = require("../controllers/controllersComentarios");

module.exports = function(app){
    app.get('/comentarios',controller.listarComentarios);
    app.get('/comentarios/:id', controller.buscarComentarios);
    app.post('/comentarios', controller.inserirComentarios);
    app.delete('/comentarios', controller.deleteComentarios);
    
}