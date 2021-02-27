var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path')
const {register, processRegister, login, processLogin, logout} = require('../controllers/usersController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })



/* registro */
router.get('/register', register)
router.post('/register',upload.any(), processRegister)

/* logeo */
router.get('/login', login)
router.post('/login', processLogin )

/* logout */
router.get('/logout', logout)

module.exports = router;
