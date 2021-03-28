const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty().withMessage('este campo es requerido'),

    check('category')
    .notEmpty().withMessage('debe seleccionar uno'),

    check('types')
    .custom((value)=>{
       
        if(value.length && value.includes(4)){
            return false
        }
           return true
        
    })
    .withMessage('seleccione uno'),

    check('price')
    .isNumeric().withMessage('el valor tiene que ser numerico')
    .notEmpty().withMessage('este campo es requerido'),

    check('description')
    .notEmpty().withMessage('este campo es requerido')
    .isLength({min : 100, max : 400}).withMessage('minimo 100 caracateres maximo 400'),

    check('image')
    .notEmpty().withMessage('este campo es requerido')
    .matches(/(.jpg|.jpeg|.png|.gif|.webp)$/i).withMessage('la imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp')
    
]