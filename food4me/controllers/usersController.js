const bcrypt = require('bcrypt');
const db = require('../database/models')
const fs = require('fs')
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
                    if (bcrypt.compareSync(pass.trim(), user.pass)) {
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

                            res.cookie('userFood4me', req.session.user, {
                                maxAge: 60 * 1000 * 60//mide en milisegundos
                            })
                        }
                        if (user.rol_id == 1) {
                            return res.redirect('/')
                        } else {
                            return res.redirect('/admin/list')
                        }
                    } else {
                        console.log('1')
                        res.render('login', {
                            errores: {
                                pass: {
                                    msg: 'contraseña inválida'
                                }
                            },
                            datos: req.body
                        });
                    }
                })
                .catch((error) => res.send(error))


        } else { //revisar donde marca cada error!!           
            console.log('2')
            return res.render('login', {
                errores: errores.mapped(),
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
            });
        }

    },
    profile: (req, res) => {

        let user = res.locals.user
        res.render('profile', {
            user
        })

    },
    userEdit: (req, res) => {
        db.Usuarios.findByPk(req.session.user.id)
            .then((user) => {
                res.render('editUser', { user })
            })
            .catch(error => res.send(error))


    },
    upUser: (req, res) => {

        const { name, last_name, date, pass, pass2 } = req.body
        let passHash = bcrypt.hashSync(pass.trim(), 12)

        if (req.files[0] && req.session.user.image != 'userDefault.png') {
            fs.unlinkSync('public/images/users/' + req.session.user.image)
        }

        db.Usuarios.update({
            name: name.trim(),
            last_name: last_name.trim(),
            image: req.files[0] ? req.files[0].filename : undefined,
            date: date,
            pass: passHash
        },
            {
                where: {
                    id: req.session.user.id
                }
            })
            .then(user => {
                db.Usuarios.findByPk(req.session.user.id)
                .then((user)=>{
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        last_name: user.last_name,
                        email: user.email,
                        rol_id: user.rol_id,
                        image: user.image,
                        client_id: user.client_id
                    }
                    return res.redirect('/users/profile')
                })
               
                
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