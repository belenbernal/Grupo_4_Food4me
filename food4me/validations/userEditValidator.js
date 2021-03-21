const {check, body} = require('express-validator');
const db = require('../database/models');


module.exports = [
    check('name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('last_name')
    .notEmpty().withMessage('Este campo es requerido'),
    
    check('pass')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min : 6, max : 12}).withMessage('La contraseña tiene que tener entre 6 y 12 caracteres'),

    check('pass2')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min : 6, max : 12}).withMessage('La contraseña tiene que tener entre 6 y 12 caracteres'),

    body('pass2').custom((value,{req}) =>{
        if (value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden'),

    check('date')
    .notEmpty().withMessage('este campo es requerido'),

]