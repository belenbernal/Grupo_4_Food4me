var express = require('express');
var router = express.Router();
const {userList, userEdit, adminList, clientList, clientEdit, clientDelete} = require('../controllers/superAdminController')

/* lista de usuarios */
router.get('/superadmin/userList', userList);

/* editar usuario */
router.get('/superadmin/userEdit', userEdit);

/* lista de admin */
router.get('/superadmin/adminList', adminList);

/* lista de clientes */
router.get('/superadmin/clientList', clientList);

/* editar cliente */
router.get('/superadmin/clientEdit', clientEdit);

/* eliminar cliente */
router.get('/superadmin/clientDelete', clientDelete);

module.exports = router;