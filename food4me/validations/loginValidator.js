const {check} = require('express-validator');

module.exports = [
    check('email')
    .notEmpty().withMessage('Este campo es requerido')
    .isEmail().withMessage('El email debe ser válido'),

    check('pass')
    .notEmpty().withMessage('La constraseña es requerida'),
]