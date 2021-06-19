const controller = require("../controllers/posts");

module.exports = function(app){
    app.get("/posts",controller.listarPosts);
    app.post("/posts", controller.inserirPost);
    app.get("/posts/:id",controller.buscarPost);
    app.delete("/posts/:id", controller.deletePost);
    app.get("/posts/:id/comentarios",controller.obtercomentarioID);
}