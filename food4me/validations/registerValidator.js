const {check, body} = require('express-validator');
const { setUsers, getUsers } = require("../data/users");
const users_db = getUsers();

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Este campo es requerido'),

    check('apellido')
    .notEmpty().withMessage('Este campo es requerido'),

    check('email')
    .notEmpty().withMessage('este campo es requerido')
    .isEmail().withMessage('este campo tiene q tener fomrato de email ejemplo: nombre@email.com'),

    body('email').custom(value =>{
        let result = users_db.find(user => user.email === value)
        if (result){
            return false
        }else{
            return true
        }
    }).withMessage('El email ya esta registrado'),
    
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

    check('genero')
    .notEmpty().withMessage('Este campo es requerido')
]