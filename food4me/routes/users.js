var express = require('express');
var router = express.Router();
const multer = require('multer');
const bcrypt = require('bcrypt')

const usersController=require('../controllers/usersController')
/* GET users listing. */
router.get('/login', usersController.login)
router.get('/register', usersController.register)

module.exports = router;
