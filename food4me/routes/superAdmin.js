var express = require('express');
var router = express.Router();
const {updateUser, userList, adminList, clientList, clientDelete, clientAdd, clientUpdate, adminDelete} = require('../controllers/superAdminController')

/* lista de usuarios */
router.get('/userList', userList);
/* editar usuario */
router.put('/update/:id', updateUser)
/* lista de admin */
router.get('/adminList', adminList);
router.delete('/eliminar/:id', adminDelete)
/* agregar cliente */
router.get('/clientAdd', clientAdd)
router.post('/clientAdd', clientUpdate)
/* lista de clientes */
router.get('/clientList', clientList);
/* eliminar cliente */
router.delete('/clientDelete/:id', clientDelete);

module.exports = router;