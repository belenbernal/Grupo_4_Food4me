const {check} = require('express-validator');

module.exports = [
    check('email')
    .isEmail().withMessage('El email debe ser válido'),

    check('pass')
    .notEmpty().withMessage('La constraseña es requerida')
]