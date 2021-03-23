const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty().withMessage('este campo es requerido'),

    check('categoria')
    .isIn([1,2,3,4]).withMessage('clickear al menos uno')
]