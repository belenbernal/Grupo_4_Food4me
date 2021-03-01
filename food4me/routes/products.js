var express = require('express');
var router = express.Router();

const { carrito, productDetail, search} = require('../controllers/productController')
const userCheck = require('../middlewares/userCheck');



/* detalle de productos */
router.get('/detail/:id',productDetail);

/* buscador */
router.get('/search',search);

/* carrito */
router.get('/carrito', userCheck, carrito );





module.exports = router;