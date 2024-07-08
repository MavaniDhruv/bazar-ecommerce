var jwt = require('jsonwebtoken');
const sellerModel = require('../model/sellerModel');
const productModel = require('../model/productModel');
const categoryModel = require('../model/categoryModel');
const offerModel = require('../model/offerModel');


var token;

exports.s_login = async (req,res) =>{
    var data = await sellerModel.find({"s_email":req.body.s_email});

    if(data.length>0){
        if(data[0].s_password==req.body.s_password){
            token = jwt.sign(data[0].id,'sellerToken')
            res.status(200).json({
                status:"Seller Login Success",
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

exports.s_register = async (req,res) =>{
    var data = await sellerModel.create(req.body);

    res.status(200).json({
        status:"Seller Register",
        data
    })
}

exports.getdata = async (req,res) =>{
    var sid = jwt.verify(req.header.auth,'sellerToken');
    console.log(sid);
}

exports.add_category = async (req,res) =>{

    req.body.category_img = req.file.originalname;
    var data = await categoryModel.create(req.body);

    res.status(200).json({
        status:"Category Added",
        data
    })
}

exports.add_size = async (req,res) =>{
    var data = await sizeModel.create(req.body);

    res.status(200).json({
        status:"Size Added",
        data
    })
}

exports.add_color = async (req,res) =>{
    var data = await colorModel.create(req.body);

    res.status(200).json({
        status:"Color Added",
        data
    })
}

exports.add_product = async (req,res) =>{
    req.body.p_img = req.file.originalname;
    var data = await productModel.create(req.body);

    res.status(200).json({
        status:"Product Added",
        data
    })
}

exports.view_category = async (req,res) =>{
    var total_category = await categoryModel.find().count()
    var data = await categoryModel.find();

    res.status(200).json({
        status:"View All Category",
        total_category,
        data
    })
}

exports.view_one_category = async (req,res) =>{
    var cate = req.params.category;
    var data = await productModel.find({p_category:cate});

    res.status(200).json({
        status:"View One Category Product",
        data
    })
}

exports.view_product = async (req,res) =>{
    var total_product = await productModel.find().count()
    var data = await productModel.find().populate('p_category');
    
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

exports.update_product = async (req,res) =>{
    req.body.p_img = req.file.originalname;

    images = res.files
    multi_img = []
    for(data of images){
        data1 = data.originalname
        multi_img.push(data1)
    }
    req.body.p_multi_img = multi_img;
    console.log(multi_img);
    var id = req.params.id;
    var data = await productModel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Updated Product",
        data
    })
}

exports.delete_product = async (req,res) =>{
    var id = req.params.id;
    var data = await productModel.findByIdAndDelete(id);

    res.status(200).json({
        status:"deleted Product",
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
    var size = req.params.id
    data = await productModel.find({p_size:size})
    
    res.status(200).json({
        status:"Filter Size wise Product",
        data
    })
}

exports.filter_color =  async (req,res) =>{
    var color = req.params.id
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

exports.add_offer = async (req,res) =>{
    var data = await offerModel.create(req.body)

    res.status(200).json({
        status:"Offer Added",
        data
    })
}