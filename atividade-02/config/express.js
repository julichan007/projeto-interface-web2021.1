const express = require('express');
const routerUsuarios = require("../app/routes/routesUsuarios");
const bodyParser = require("body-parser");
//import bodyParser from 'body-parser'

const routerPosts = require("../app/routes/routesPosts");
const routerComentarios = require("../app/routes/routesComentario");

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
