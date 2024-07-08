var express = require('express');
var router = express.Router();

var user = require('../controller/userController');
const { route } = require('./seller');

router.post('/login',user.u_login);
router.post('/register',user.u_register);
router.get('/getdata',user.getdata);
router.get('/view_product',user.view_product);
router.get('/view_product/:id',user.view_one_product); 
router.post('/add_cart/:id',user.add_cart);   
router.get('/view_cart',user.view_cart);
router.get('/remove_cart/:id',user.remove_cart); 
router.get('/filter_category/:id',user.filter_category);
router.get('/filter_color/:id',user.filter_color);
router.get('/filter_size/:id',user.filter_size); 
router.post('/filter_price',user.filter_price);
router.get('/buy_product',user.buy_product);
router.get('/buy_product_detail',user.buy_product_detail);

module.exports = router;