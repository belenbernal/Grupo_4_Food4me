var express = require('express');
var router = express.Router();
const upload = require ('../middlewares/usersMulter');
const {register, processRegister, login, processLogin, logout} = require('../controllers/usersController');


/* registro */
router.get('/register', register)
router.post('/register',upload.any(), processRegister)

/* logeo */
router.get('/login', login)
router.post('/login', processLogin )

/* logout */
router.get('/logout', logout)

module.exports = router;
