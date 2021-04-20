var express = require('express');
var router = express.Router();
const {clientEditUp, productDelete, editProduct, newProduct, productAdd, productList, updateProduct, clientEdit} = require('../controllers/adminController')
const upload = require('../middlewares/productMulter');
const adminCheck = require('../middlewares/adminCheck');
const productValidator = require('../validations/productValidator');
const productEditValidator = require('../validations/productEditValidator');


/* carga de producto*/
router.get('/create', adminCheck, productAdd);
router.post('/create', upload.any(), productValidator, newProduct);

/* edicion y subida de producto */
router.get('/edit/:id', adminCheck , editProduct);
router.put('/update/:id', upload.any(), productEditValidator, updateProduct);

/* elimina producto */
router.delete('/eliminar/:id', adminCheck , productDelete);

/* lista productos */
router.get('/list', adminCheck , productList);

/* editar cliente */
router.get('/clientEdit', adminCheck, clientEdit);
router.post('/clientEdit', clientEditUp);

module.exports = router;