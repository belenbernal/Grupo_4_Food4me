var express = require('express');
var router = express.Router();
const {menu,contact,home, contactForm} = require('../controllers/indexController');

/* const contactValidator = require('../validations/contactValidator'); */

/* GET home page. */
router.get('/', home);

router.get('/menu', menu);

router.get('/contact', /* contactValidator, */ contact);
router.post('/contact', /* contactValidator, */ contactForm);

module.exports = router;