const cartModel = require("../model/cartModel");
const productModel = require("../model/productModel");
const userModel = require("../model/userModel")
const ordermodel =  require('../model/oredermodel')
var jwt = require('jsonwebtoken')

var token;

exports.u_login = async (req,res) =>{
    var data = await userModel.find({"u_email":req.body.u_email});

    if(data.length>0){
        if(data[0].u_password==req.body.u_password){
            token = jwt.sign(data[0].id,'userToken')
            res.status(200).json({
                status:"User Login Success",
                token
            })
        }else{
            res.status(200).json({
                status:"Check Your Email & Password"
            })
        }
    }else{
        res.status(200).json({
            status:"Check Your Email & Password"
        })       
    }
}

exports.u_register = async (req,res) =>{
    var data = await userModel.create(req.body);

    res.status(200).json({
        status:"User Register",
        data
    })
}

exports.getdata = async (req,res) =>{
    var uid = jwt.verify(req.header.auth,'userToken');
    console.log(uid);
}

exports.view_product = async (req,res) =>{
    var total_product = await productModel.find().count()
    var data = await productModel.find();
    
    res.status(200).json({
        status:"View All Product",
        total_product,
        data
    })
}

exports.view_one_product = async (req,res) =>{
    var id = req.params.id;
    var data = await productModel.findById(id); 

    res.status(200).json({
        status:"View One Product",   
        data
    })
}

exports.add_cart = async (req,res) =>{
    var id = req.params.id;
    // var uid = jwt.verify(req.headers.auth,'userToken');
    req.body.product_id = id;
    // req.body.user_id = uid;  
    var data = await cartModel.create(req.body);

    res.status(200).json({
        status:"Products Added to Cart",
        data
    })
}

exports.view_cart = async (req,res) =>{
    // var uid = jwt.verify(req.headers.auth,'userToken'); 
    var data = await cartModel.find(/*{user_id:uid}*/).populate('product_id');

    res.status(200).json({
        status:"View Cart",
        data
    })
}

exports.remove_cart = async (req,res) =>{
    var id = req.params.id
    var data = await cartModel.findByIdAndDelete(id);

    res.status(200).json({
        status:"Remove Cart",
        data
    })
}

exports.filter_category =  async (req,res) =>{
    var id = req.params.id
    var data = await productModel.find({p_category:id}).populate('p_category')

    res.status(200).json({
        status:"Filter Category wise Product",
        data
    })
}

exports.filter_size =  async (req,res) =>{
    var size = req.body.size
    data = await productModel.find({p_size:size})

    res.status(200).json({
        status:"Filter Size wise Product",
        data
    })
}

exports.filter_color =  async (req,res) =>{
    var color = req.body.color
    var data = await productModel.find({p_color:color})

    res.status(200).json({
        status:"Filter Color wise Product",
        data
    })
}

exports.filter_price = async (req,res) =>{
    var min_price = req.body.min_price;
    var max_price = req.body.max_price;
    var data = await productModel.find({p_price : { $gte :  min_price  }, p_price: { $lte : max_price }})

    res.status(200).json({
        status:"Filter Price wise Product",
        data
    })
}

exports.buy_product = async (req,res) => {
    var uid = await jwt.verify(req.headers.auth,'userToken');
    var data = await cartModel.find({user_id:uid}).populate(['product_id','offer']);
    
    var products = []
    var total = 0;
    var discount = 0;
    for(pid of data){

        if(pid.offer!=null){
        
            var offerproduct = pid.offer.product_id
        
            for(prod of offerproduct){      
                
                if(prod==pid.product_id.id){  
                    discount += pid.product_id.p_price/pid.offer.discount
                    // console.log("hello")
                    // console.log(discount)
                }
            }
        } 

        products.push(pid.product_id)
        total += pid.product_id.p_price
        // console.log(total)
    }

    req.body.user_id = uid
    req.body.product_id = products
    req.body.total_amount = total-discount
    var insert = await ordermodel.create(req.body)
    var delete_cart = await cartModel.deleteMany({user_id:uid});

    res.status(200).json({
        status : "Bill Generated",
        insert
    })   
}

exports.buy_product_detail = async (req,res) => {
    var uid = await jwt.verify(req.headers.auth,'userToken');
    var data = await cartModel.find({user_id:uid}).populate(['user_id','product_id']);

    res.status(200).json({
        status : "Order Detail",
        data
    })   
}