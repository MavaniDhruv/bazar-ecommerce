const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    p_name:{
        type:String
    },
    p_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    p_size:{
        type:Array
    },
    p_color:{
        type:Array
    },
    p_img:{
        type:String
    },
    p_multi_img:[{
        type:String 
    }],
    p_price:{
        type:Number
    },
    p_description:{
        type:String
    }
})
   
module.exports = mongoose.model('product',productSchema)