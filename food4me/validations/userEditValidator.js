const {check, body} = require('express-validator');
const db = require('../database/models');


module.exports = [
    check('name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('last_name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('date')
    .notEmpty().withMessage('este campo es requerido'),

]