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

            db.Usuarios.findOne({
                where: {
                    email
                }
            })
                .then(user => {
                    if (user && bcrypt.compareSync(pass.trim(), user.pass)) {
                        /* creamos la session */
                        req.session.user = {
                            id: user.id,
                            name: user.name,
                            last_name: user.last_name,
                            email: user.email,
                            rol_id: user.rol_id,
                            image: user.image,
                            client_id: user.client_id
                        }

                        /* si hizo click en el check de recordar.. */
                        if (recordar) {
                            /* guardamos la sesion por 1 minuto */
                            res.cookie('userFood4me', req.session.user, {
                                maxAge: 60 * 1000 //mide en milisegundos
                            })
                        }
                        if (user.rol_id == 1) {
                            return res.redirect('/')
                        } else {
                            return res.redirect('/admin/list')
                        }
                    } else {
                        return res.render('login', {
                            errores: {
                                invalid: {
                                    msg: "Credenciales inválidas"
                                }
                            }
                        })
                    }
                })
                .catch(error => res.send(error))

        } else { //revisar donde marca cada error!!
            return res.render('login', {
                errores: {
                    pass: {
                        msg: 'La contraseña es incorrecta'
                    }
                },
                datos: req.body
            });
        }
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

            db.Usuarios.create({
                /* crea nuevo usuario */
                email: email.trim(),
                name: nombre.trim(),
                last_name: apellido.trim(),
                pass: passHash,
                date: date,
                image: req.files[0].filename || 'sin imagen',
                userAddress_id: 2,
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
        
        let user = res.locals.user
        res.render('profile', {
            user
        })
    },
    logout: (req, res) => {
        
        delete req.session.user

        if (req.cookies.userFood4me) {
            res.cookie('userFood4me', '', { maxAge: -1 });
        }

        res.redirect('/')
    }
}

module.exports = usersController