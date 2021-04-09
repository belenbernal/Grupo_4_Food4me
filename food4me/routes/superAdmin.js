var express = require('express');
var router = express.Router();
const {userList, userEdit, adminList, clientList, clientEdit, clientDelete} = require('../controllers/superAdminController')

/* lista de usuarios */
router.get('/userList', userList);

/* editar usuario */
router.get('/userEdit', userEdit);

/* lista de admin */
router.get('/adminList', adminList);

/* lista de clientes */
router.get('/clientList', clientList);

/* editar cliente */
router.get('/clientEdit', clientEdit);

/* eliminar cliente */
router.get('/clientDelete', clientDelete);

module.exports = router;