var express = require('express');
var router = express.Router();
const path = require("path")
const multer = require("multer");
const productController = require('../controllers/productController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/create', productController.productAdd);
router.post('/create', upload.any(), productController.newProduct);

router.get('/detail/:id', productController.productDetail);

router.get('/edit/:id',productController.editProduct);
router.put('/update/:id', upload.any(), productController.updateProduct);

router.delete('/eliminar/id', productController.productDelete)

router.get('/search', productController.search);

router.get('/carrito', productController.carrito );

router.get('/list', productController.list)

module.exports = router;