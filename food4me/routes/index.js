var express = require('express');
var router = express.Router();
const {menu,contact,home} = require('../controllers/indexController')

/* GET home page. */
router.get('/', home);

router.get('/menu', menu);

router.get('/contact', contact)

module.exports = router;