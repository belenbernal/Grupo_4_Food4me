const path = require('path');
const bcrypt = require('bcrypt');
const { setUsers, getUsers } = require("../data/users");
const users_db = getUsers()
const {validationResult} = require('express-validator');

const usersController = {
    login:(req,res)=> {
        res.render('login')
    },
    processLogin:(req,res)=> {
        /* res.send('Hola') */

        /* en esta variable capturamos los datos que no hayan pasado la validacion */
        let errores = validationResult(req);

        /* requerimos los datos que nos envian desde el formulario */
        const {email, pass, recordar} = req.body;

        /* si el array de errores no esta vacia, muestro los errores */
        if(!errores.isEmpty()){
            res.render('login',{
                errores : errores.mapped()
            })
        }else{ /* si el array de errores esta vacia.. */

            /* buscamos el user (email) ingresado en la base de datos (json) */
            let result = users_db.find(user => user.email === email);

            /* si se encontro el usuario (email) */
            if(result){

                /* comparemos las contraseñas, en caso de que coincidan.. */
                if(bcrypt.compareSync(pass.trim(), result.pass)){

                    /* creamos la session */
                    req.session.user = {
                        id : result.id,
                        username : result.username,
                        rol: result.rol/*,
                        avatar : result.avatar*/
                    }

                    /* si hizo click en el check de recordar.. */
                    if(recordar){
                        
                        /* guardamos la sesion por 1 minuto */
                        res.cookie('userFood4me',req.session.user,{
                            maxAge : 60 * 1000 //mide en milisegundos
                        })
                    }

                    /* redirigimos al home */
                    res.redirect('/')
                }
            }
            /* si no encontro el email que coincide con el ingresado..
            renderizo la pagina del login con un mensaje */
            res.render('login', {
                errores : [
                    {
                        msg : "credenciales inválidas"
                    }
                ]
            })
        }
    },
    register:(req,res)=>{
        res.render('register')
    },
    processRegister :(req, res)=>{

        /* creo una variable para crear el usuario en el json */
        let last = 0
        
        users.forEach(usuario => {        
            if(usuario.id > last){

               last = usuario.id            
            }

        });

        /* requiro los campos pasados por el formulario */
        const {mail, nombre, apellido, pass1, pass2, birth, genero} = req.body;
        
        /* encripta la contraseña */
        let passHash1 = bcrypt.hashSync(pass1.trim(),10)
        let passHash2 = bcrypt.hashSync(pass2.trim(),10)

        
        if (passhash1 === passhash2) {

            /* crrea nuevo usuario */
            let newUser = {
                id : +last + 1,
                mail : mail.trim(),
                nombre : nombre.trim(),
                apellido : apellido.trim(),
                pass1 : passHash1,
                pass2 : passHash2,
                birth : birth,
                image : req.files[0].filename,
                genero : genero
            }
    
            /* envia al nuevo usuario al json */
            users.push(newUser);
            setUser(users)
            
        }
        
        res.redirect('/users/login')
    },
    profile:(req,res)=>{
        res.render('profile')
    },
    logout : (req, res)=>{

    }
}

module.exports=usersController