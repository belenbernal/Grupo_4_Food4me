const {check, body} = require('express-validator');
const { setUsers, getUsers } = require("../data/users");
const users_db = getUsers();

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Este campo es requerido'),

    check('apellido')
    .notEmpty().withMessage('Este campo es requerido'),

    check('mail')
    .notEmpty().withMessage('Este campo es requerido')
    .isEmail().withMessage('este campo tiene que tener formato de email ejemplo: nombre@email.com'),

    body('mail').custom(value =>{
        let result = users_db.find(email => email.mail === value)
        if (result){
            return false
        }else{
            return true
        }
    }).withMessage('El email ya esta registrado'),
    
    check('pass1')
    .notEmpty().withMessage('Este campo es requerido')
    .isLength({min : 6, max : 12}).withMessage('La contraseña tiene que tener entre 6 y 12 caracteres'),

    body('pass2').custom((value,{req}) =>{
        if (value !== req.body.pass1){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden'),

    check('birth')
    .notEmpty().withMessage('Este campo es requerido'),

    check('genero')
    .notEmpty().withMessage('Este campo es requerido')
]