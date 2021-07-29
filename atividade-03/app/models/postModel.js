const mongoose = require('mongoose');


module.exports =  function(){
    let schema = mongoose.Schema({
        texto:{
            type: "String",
            require: true,
        },
        likes:{
            type: "Number",
            require: true,
        }, 
        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: "Usuario", 
            //require: true,
        }, 
        id_comentario:{
            type: mongoose.Schema.ObjectId,
            ref:"Comentario",
            require: true,
        },
    })
    return mongoose.model("Post",schema);
}();