const mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    offer:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'offer'
    }
})

module.exports = mongoose.model('cart',cartSchema)