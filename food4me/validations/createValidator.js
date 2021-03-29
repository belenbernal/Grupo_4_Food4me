const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),

    check('category')
    .notEmpty().withMessage('Debe seleccionar una categoría'),

    body('types').custom((value)=>{
        if(!value){
            return false
        }
           return true
    })
    .withMessage('Seleccione al menos un check')
    .custom((value)=>{
        if(value.length && value.includes("4")){
            return false
        }
           return true
    })
    .withMessage('Si seleccionó la ultima opción, no puede elegir las otras opciones'),
    

    check('price')
    .isNumeric().withMessage('El valor tiene que ser numérico')
    .notEmpty().withMessage('El precio es requerido'),

    check('description')
    .notEmpty().withMessage('Por favor agregue la descripción del producto')
    .isLength({min : 100, max : 400}).withMessage('Mínimo 100 caracateres máximo 400'),

    check('image')
    .custom((value,{req})=>{
        if(req.files[0]){
            return true;
        }else{
            return false;
        }

    }).withMessage('La imagen del producto es requerida')
    .custom((value,{req})=>{
        if(req.files[0].filename.match(/(.jpg|.jpeg|.png|.gif|.webp)$/i)){
            return true
        }else{
            return false
        }
    })
    .withMessage('La imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp')
    
]