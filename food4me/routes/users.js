var express = require('express');
var router = express.Router();
const multer = require('multer');
const bcrypt = require('bcrypt')

const {login,processLogin,register}=require('../controllers/usersController')


/* GET users listing. */
router.get('/login', login);
router.post('/login', processLogin);
router.get('/register', register);

module.exports = router;
