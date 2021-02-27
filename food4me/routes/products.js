var express = require('express');
var router = express.Router();
const path = require("path");
const multer = require("multer");
const { carrito, productDetail, search} = require('../controllers/productController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })


/* detalle de productos */
router.get('/detail/:id',productDetail);

/* buscador */
router.get('/search',search);

/* carrito */
router.get('/carrito',carrito );





module.exports = router;