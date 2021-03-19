var express = require('express');
var router = express.Router();

const upload = require('../middlewares/usersMulter');
const {login,processLogin,register,logout,profile,processRegister}=require('../controllers/usersController')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const sessionCheck = require('../middlewares/sessionCheck');


router.get('/login', sessionCheck, login);
router.post('/login', loginValidator, processLogin);

router.get('/register', sessionCheck , register);
router.post('/register', registerValidator, upload.any(), processRegister);

router.get('/profile',userCheck, profile);

router.get('/logout', userCheck, logout);

module.exports = router;
