const {check, body} = require('express-validator');
const { setUsers, getUsers } = require("../data/users");
const users_db = getUsers();

module.exports = [
    check('nombre')
    .notEmpty().withMessage('este campo es requerido'),

    check('apellido')
    .notEmpty().withMessage('este campo es requerido'),

    check('mail')
    .notEmpty().withMessage('este campo es requerido')
    .isEmail().withMessage('este campo tiene q tener fomrato de email ejemplo: nombre@email.com'),

    body('mail').custom(value =>{
        let mail = users_db.find(email => email.mail === value)
        if (mail){
            return false
        }else{
            return true
        }
    }).withMessage('el email ya esta registrado'),
    
    check('pass')
    .notEmpty().withMessage('este campo es requerido')
    .isLength({min : 6, max : 12}).withMessage('la contraseña tiene q tener un minimo de 6 y un maximo de 12 caracteres'),

    body('pass2').custom((value,{req}) =>{
        if (value !== req.body.pass1){
            return false
        }else{
            return true
        }
    }).withMessage('las contraseñas no coinciden'),

    check('birth')
    .notEmpty().withMessage('este campo es requerido'),

    check('genero')
    .notEmpty().withMessage('este campo es requerido')
]