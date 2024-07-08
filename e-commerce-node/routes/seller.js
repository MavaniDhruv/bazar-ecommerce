var express = require('express');
var router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

var seller = require('../controller/sellerController');

router.post('/login',seller.s_login);
router.post('/register',seller.s_register);
router.post('/add_category',upload.single('category_img'),seller.add_category);
router.post('/add_product',upload.single('p_img'),upload.array('p_multi_img'),seller.add_product);
// router.post('/add_product',seller.add_product);
router.get('/view_category',seller.view_category);
router.get('/view_category/:id',seller.view_one_category);
router.get('/view_product',seller.view_product);
router.get('/view_product/:id',seller.view_one_product);
router.post('/update_product/:id',upload.single('p_img'),upload.array('p_multi_img',7),seller.update_product);
router.get('/delete_product/:id',seller.delete_product);
router.get('/filter_category/:id',seller.filter_category);
router.get('/filter_color/:id',seller.filter_color);
router.get('/filter_size/:id',seller.filter_size);
router.get('/filter_price/:id',seller.filter_price);
router.get('/add_offer',seller.add_offer);



router.get('/getdata',seller.getdata);

module.exports = router;
