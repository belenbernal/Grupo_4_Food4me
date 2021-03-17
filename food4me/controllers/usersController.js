const bcrypt = require('bcrypt');
const db = require('../database/models')
const { validationResult } = require('express-validator');



const usersController = {
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        /* en esta variable capturamos los datos que no hayan pasado la validacion */
        let errores = validationResult(req);
        if (errores.isEmpty()) {

            const { email, pass, recordar } = req.body;

            db.usuarios.findOne({
                where: {
                    email
                }
            })
                .then(user => {
                    if (user && bcrypt.compareSync(pass.trim(), result.pass)) {
                        /* creamos la session */
                        req.session.user = {
                            id: result.id,
                            name: result.nombre,
                            last_name: result.apellido,
                            email: result.email,
                            rol: result.rol,
                            image: result.image
                        }

                        /* si hizo click en el check de recordar.. */
                        if (recordar) {
                            /* guardamos la sesion por 1 minuto */
                            res.cookie('userFood4me', req.session.user, {
                                maxAge: 60 * 1000 //mide en milisegundos
                            })
                        }

                        return res.redirect('/')
                    }
                    return res.render('login', {
                        errores: {
                            invalid: {
                                msg: "Credenciales inválidas"
                            }
                        }
                    })
                })

        } else {
            res.render('login', {
                errores: {
                    pass: {
                        msg: 'La contraseña es incorrecta'
                    }
                },
                datos: req.body
            });
        }
        /* si no encontro el email que coincide con el ingresado.. renderizo la pagina del login con un mensaje */
        res.render('login', {
            errores: {
                email: {
                    msg: 'El usuario es incorrecto'
                }
            },
            datos: req.body
        });


    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {

        let errores = validationResult(req);

        if (errores.isEmpty()) {

            /* requiro los campos pasados por el formulario */
            const { email, nombre, apellido, pass, date } = req.body;
            /* encripta la contraseña */
            let passHash = bcrypt.hashSync(pass.trim(), 12)

            db.usuarios.create({
                /* crea nuevo usuario */
                email: email.trim(),
                name: nombre.trim(),
                last_name: apellido.trim(),
                pass: passHash,
                date: date,
                image: req.files[0].filename || 'sin imagen',
                userAddress_id : 4,
                client_id: null,
                rol_id: 1
            })
                .then(() => res.redirect('/users/login'))
                .catch(error => res.send(error))

        } else {
            return res.render('register', {
                errores: errores.mapped(),
                datos: req.body
            })
        }

    },
    profile: (req, res) => {
        res.render('profile', {
            users_db
        })
    },
    logout: (req, res) => {

        db.usuarios.destroy()
            /* preguntamos si existe la cookie */
            if(req.cookies.userFood4me) {

                /* si existe, borramos la cookie */
                res.cookie('userFood4me', '', { maxAge: -1 });

            }
           
       
        res.redirect('/')    
    }
}

module.exports = usersController