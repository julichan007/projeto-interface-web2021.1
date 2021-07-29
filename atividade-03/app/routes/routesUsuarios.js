const controller = require("../controllers/controllersUsuarios");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/usuarios/signin",controllerAuth.logar);
    app.post("/usuarios", controller.inserirUsuario);

    app.use("/usuarios", controllerAuth.checar);
    app.get("/usuario", controller.getUsuariobyId);
    app.get("/listartodosusuarios", controller.getAllUsuarios);
    app.get("/usuarios/:id/post", controller.obterPostUsuario);

    //app.get("/usuarios/:id/allPosts"), controller.getThisAllPosts);
  

    app.delete("/usuarios/:id",controller.removerUsuario);

    
}