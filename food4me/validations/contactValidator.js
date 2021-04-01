const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .isLength({min:2})
    .notEmpty().withMessage('Este campo es requerido'),

    check('apellido')
    .isLength({min:2})
    .notEmpty().withMessage('Este campo es requerido'),

    check('email')
    .notEmpty().withMessage('Este campo es requerido')
    .isEmail().withMessage('El email debe ser válido'),

    check('asunto')
    .isLength({min:3})
    .notEmpty().withMessage('Por favor ingrese el asunto'),

    check('mensaje')
    .notEmpty().withMessage('Por favor escriba su mensaje'),
]