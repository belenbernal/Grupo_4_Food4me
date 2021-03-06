const {check, body} = require('express-validator');
const db = require('../database/models');


module.exports = [
    check('nombre')
    .notEmpty().withMessage('Este campo es requerido'),

    check('apellido')
    .notEmpty().withMessage('Este campo es requerido'),

    check('email')
    .normalizeEmail()
    .notEmpty().withMessage('este campo es requerido')
    .isEmail().withMessage('este campo tiene que tener fomrato de email ejemplo: nombre@email.com'),

    body('email').custom(value =>{
        return db.Usuarios.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('El email ya esta registrado');
            }
        })
    }),
    
    check('pass')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min : 8}).withMessage('La contraseña debe tener 8 caracteres como minimo'),

    check('pass2')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min : 8}).withMessage('La contraseña debe tener 8 caracteres como minimo'),

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