const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    product_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'product'
    }],
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    total_amount:{
        type : Number
    }
})

module.exports = mongoose.model('order',orderSchema)