var express = require('express');
var router = express.Router();

const upload = require('../middlewares/usersMulter')
const {login,processLogin,register,logout,profile,processRegister}=require('../controllers/usersController')

const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');

/* GET users listing. */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

router.get('/register', register);
router.post('/register',upload.any(), processRegister)

router.get('/profile',userCheck, profile);

router.get('/logout',logout);

module.exports = router;
