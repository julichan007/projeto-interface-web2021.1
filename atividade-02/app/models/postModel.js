const mongoose = require('mongoose');
const { schema } = require('./comentario');

module.exports =  function(){
    let Schema = mongoose.Schema({
        texto:{
            type: String,
            require: true
        },
        likes:{
            type: Number,
            require: true
        }, 
        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: "Usuario", 
            require: true
        }, 
        id_comentario:{
            type: mongoose.Schema.ObjectId,
            ref:"Comentario",
            require: true
        },
    })
    return mongoose.model("Post", schema);
}();