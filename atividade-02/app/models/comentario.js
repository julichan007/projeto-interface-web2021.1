const mongoose = require('mongoose');

module.exports = function(){
    let Schema = mongoose.Schema({
        text:{
            type: String,
            require: true
        },
        id_post:{
            type: mongoose.Schema.ObjectId,
            ref:"Post",
            require: true
        },
        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: "Usuario", 
            require: true
        }
    })
    return mongoose.model("Comentario", schema)
}();