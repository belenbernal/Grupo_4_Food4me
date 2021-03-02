const {check,body} = require('express-validator');

module.exports = [
    check('email')
    .isEmail().withMessage('El email debe ser válido'),

    check('pass')
    .notEmpty().withMessage('La constraseña es requerida'),

    body('pass').custom((value,{req}) =>{
        if (value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden'),
]