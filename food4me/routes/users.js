var express = require('express');
var router = express.Router();
const multer = require('multer');

const {login,processLogin,register,logout,profile}=require('../controllers/usersController')

const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');

/* GET users listing. */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

router.get('/register', register);

router.get('/profile',userCheck, profile);

router.get('/logout',logout);

module.exports = router;
