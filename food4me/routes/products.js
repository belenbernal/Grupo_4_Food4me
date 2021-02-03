var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/create', productController.productAdd);

router.get('/detail/:id', productController.productDetail);

router.get('/carrito', productController.carrito )
module.exports = router;