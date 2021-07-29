const controller = require("../controllers/controllersComentarios");
const controllerAuth = require("../controllers/auth");


module.exports = function(app){
    app.use('/comentarios', controllerAuth.checar);
    app.get('/comentarios',controller.listarComentarios);
    app.get('/comentarios/:id', controller.buscarComentarios);
    app.post('/comentarios', controller.inserirComentarios);
    app.delete('/comentarios', controller.deleteComentarios);
    
}