var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const {index, productDelete, editProduct, newProduct, productAdd, productList, updateProduct} = require('../controllers/adminController')

/* multer */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })


/* carga de producto*/
router.get('/create',productAdd);
router.post('/create', upload.any(),newProduct);

/* edicion y subida de producto */
router.get('/edit/:id',editProduct);
router.put('/update/:id', upload.any(),updateProduct);

/* elimina producto */
router.delete('/eliminar/:id',productDelete);

/* lista productos */
router.get('/list',productList);

module.exports = router;