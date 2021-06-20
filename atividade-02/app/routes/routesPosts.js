const controller = require("../controllers/controllersPosts");

module.exports = function(app){
    app.get("/api/posts", controller.listarPosts);
    app.post("/api/posts",controller.inserirPosts);
    app.get("/api/posts/:id", controller.buscarPosts);
    app.delete("/api/posts/:id", controller.deletePost);
    app.get("/api/post/:id/comentarios", controller.obterComentarios);
}