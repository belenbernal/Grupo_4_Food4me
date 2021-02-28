var express = require('express');
var router = express.Router();
const {productDelete, editProduct, newProduct, productAdd, productList, updateProduct} = require('../controllers/adminController')
const upload = require('../middlewares/productMulter');
const userCheck = require('../middlewares/userCheck');


/* carga de producto*/
router.get('/create',productAdd);
router.post('/create', userCheck, upload.any(),newProduct);

/* edicion y subida de producto */
router.get('/edit/:id',editProduct);
router.put('/update/:id', upload.any(),updateProduct);

/* elimina producto */
router.delete('/eliminar/:id',productDelete);

/* lista productos */
router.get('/list',productList);

module.exports = router;