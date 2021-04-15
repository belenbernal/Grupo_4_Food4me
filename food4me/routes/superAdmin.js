var express = require('express');
var router = express.Router();
const {updateUser, userList, adminList, clientList, clientDelete, clientAdd} = require('../controllers/superAdminController')

/* lista de usuarios */
router.get('/userList', userList);
/* editar usuario */
router.put('/update/:id', updateUser)
/* lista de admin */
router.get('/adminList', adminList);
/* agregar cliente */
router.get('/clientAdd', clientAdd)
router.post('/clientAdd')
/* lista de clientes */
router.get('/clientList', clientList);
/* eliminar cliente */
router.delete('/clientDelete', clientDelete);

module.exports = router;