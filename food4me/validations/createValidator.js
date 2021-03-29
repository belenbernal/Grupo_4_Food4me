const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),

    check('category')
    .notEmpty().withMessage('Debe seleccionar una categoría'),

    body('types').custom((value)=>{
        if(value.length && value.includes(4)){
            return false
        }
           return true
    })
    .withMessage('Si seleccionó la ultima opción, no puede elegir las otras opciones'),

    body('types').custom((value)=>{
        if(!value){
            return false
        }
           return true
    })
    .withMessage('Seleccione al menos un check'),

    check('price')
    .isNumeric().withMessage('El valor tiene que ser numérico')
    .notEmpty().withMessage('El precio es requerido'),

    check('description')
    .notEmpty().withMessage('Por favor agregue la descripción del producto')
    .isLength({min : 100, max : 400}).withMessage('Mínimo 100 caracateres máximo 400'),

    check('image')
    .notEmpty().withMessage('La imagen del producto es requerida')
    .matches(/(.jpg|.jpeg|.png|.gif|.webp)$/i).withMessage('la imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp')
    
]