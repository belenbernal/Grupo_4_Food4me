var express = require('express');
var router = express.Router();

const upload = require('../middlewares/usersMulter');

const {login,processLogin,register,logout,profile,processRegister, userEdit, upUser}=require('../controllers/usersController')

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userEditValidator = require('../validations/userEditValidator');

const userCheck = require('../middlewares/userCheck');
const sessionCheck = require('../middlewares/sessionCheck');


router.get('/login', sessionCheck, login);
router.post('/login', loginValidator, processLogin);

router.get('/register', sessionCheck , register);
router.post('/register', upload.any() ,registerValidator, processRegister);

router.get('/profile',userCheck, profile);

router.get('/edit', userEdit);
router.put('/update',upload.any(), upUser);

router.get('/logout', userCheck, logout);

module.exports = router;
