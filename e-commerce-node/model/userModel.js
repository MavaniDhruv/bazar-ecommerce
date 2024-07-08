const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    u_name:{
        type:String
    },
    u_email:{
        type:String
    },
    u_password:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema)