const mongoose = require('mongoose');

var sellerSchema = new mongoose.Schema({
    s_name:{
        type:String
    },
    s_email:{
        type:String
    },
    s_password:{
        type:String
    }
})

module.exports = mongoose.model('seller',sellerSchema)