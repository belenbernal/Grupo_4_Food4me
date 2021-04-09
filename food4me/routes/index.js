var express = require('express');
var router = express.Router();
const {category, contact, home, contactForm, contactForCompany, postContactCompany, theCompany, team, questions} = require('../controllers/indexController');

const contactValidator = require('../validations/contactValidator');

/* GET home page. */
router.get('/', home);

router.get('/menu/:id?', category);

router.get('/contact', contactValidator, contact);
router.post('/contact', contactValidator, contactForm);

router.get('/contactForCompany', contactValidator, contactForCompany);
router.post('/contactForCompany', contactValidator, postContactCompany);

router.get('/theCompany',theCompany)

router.get('/team',team);

router.get('/questions',questions);

module.exports = router;