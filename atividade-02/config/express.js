const express = require('express')
const routerUsuarios = require("../app/routes/usuarios")
//const bodyParser = require("body-parser")
//import bodyParser from 'body-parser'

const routerPosts = require("../app/routes/posts")
const routerComentarios = require("../app/routes/comentarios")

module.exports = function(){
    let app = express()

    app.set("port", 8393)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static('./public'))
    
    routerUsuarios(app)
    routerComentarios(app)
    routerPosts(app)
    


    return app;
};
