const controller = require("../controllers/controllersPosts");
const controllerAuth = require("../controllers/auth");


module.exports = function(app){
    app.post('/posts',controller.inserirPost);
    
    app.use('/posts', controllerAuth.checar);
    app.get('/posts', controller.listarPosts);

    app.get("/posts/:id", controller.buscarPost);
    app.delete("/posts/:id", controller.deletePost);
    app.get("/posts/:id/comentarios", controller.obterComentarioID);
}