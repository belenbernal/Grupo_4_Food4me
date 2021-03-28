const {check, body} = require('express-validator');
const db = require('../database/models');


module.exports = [
    check('name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('last_name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('date')
    .notEmpty().withMessage('Este campo es requerido'),

    check('image')
    .matches(/(.jpg|.jpeg|.png|.gif|.webp)$/i).withMessage('la imagen tiene que tener formato: jpg, jpeg, png, gif o webp')

]