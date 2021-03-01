var express = require('express');
var router = express.Router();

const upload = require('../middlewares/usersMulter');
const {login,processLogin,register,logout,profile,processRegister}=require('../controllers/usersController')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');

/* GET users listing. */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

router.get('/register', register);
router.post('/register',upload.any(),registerValidator, processRegister)

router.get('/profile',userCheck, profile);

router.get('/logout', userCheck, logout);

module.exports = router;
/* logout : (req,res) => {
        req.session.destroy();
        if(req.cookies.userComision5){
            res.cookie('userComision5','',{maxAge:-1})
        }
        res.redirect('/') */