const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
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
            ref:"Usuario", 
            require: true
        },
    })
    return mongoose.model("Post", schema)
}();