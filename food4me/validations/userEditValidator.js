const {check, body} = require('express-validator');
const db = require('../database/models');


module.exports = [
    check('name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('last_name')
    .notEmpty().withMessage('Este campo es requerido'),

    check('date')
    .notEmpty().withMessage('Este campo es requerido'),

    /* tenemos que subir foto si o si */
    check('image')
    .custom((value,{req})=>{
        if(req.files[0].filename.match(/(.jpg|.jpeg|.png|.gif|.webp)$/i)){
            return true
        }else{
            return false
        }
    })
    .withMessage('La imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp')

]