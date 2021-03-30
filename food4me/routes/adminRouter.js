var express = require('express');
var router = express.Router();
const {productDelete, editProduct, newProduct, productAdd, productList, updateProduct} = require('../controllers/adminController')
const upload = require('../middlewares/productMulter');
const adminCheck = require('../middlewares/adminCheck');
const productValidator = require('../validations/productValidator');


/* carga de producto*/
router.get('/create', adminCheck, productAdd);
router.post('/create', upload.any(), productValidator, newProduct);

/* edicion y subida de producto */
router.get('/edit/:id', adminCheck , editProduct);
router.put('/update/:id', upload.any(), productValidator, updateProduct);

/* elimina producto */
router.delete('/eliminar/:id', adminCheck , productDelete);

/* lista productos */
router.get('/list', adminCheck , productList);

module.exports = router;