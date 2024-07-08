const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    category:{
        type:String
    },
    category_img:{
        type:String
    }   
})

module.exports = mongoose.model('category',categorySchema)