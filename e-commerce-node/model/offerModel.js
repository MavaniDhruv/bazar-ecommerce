const mongoose = require('mongoose');

var offerSchema = new mongoose.Schema({
    product_id:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    discount:{
        type:Number
    }
})

module.exports = mongoose.model('offer',offerSchema)