var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/index', adminController.admin)

module.exports = router;