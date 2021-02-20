var express = require('express');
var router = express.Router();
const path = require("path");
const multer = require("multer");
const {productDelete, carrito, editProduct, newProduct, productAdd, productDetail, productList, search, updateProduct} = require('../controllers/productController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

router.get('/create',productAdd);
router.post('/create', upload.any(),newProduct);

router.get('/detail/:id',productDetail);

router.get('/edit/:id',editProduct);
router.put('/update/:id', upload.any(),updateProduct);

router.get('/search',search);

router.get('/carrito',carrito );

router.delete('/eliminar/:id',productDelete);

router.get('/admin',productList);

module.exports = router;