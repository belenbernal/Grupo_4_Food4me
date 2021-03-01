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
       let errores = validationResult(req);

         /* si el array de errores no esta vacia, muestro los errores */
         if(!errores.isEmpty()){
            return res.render('register',{
                errores : errores.mapped()/* devuelve el error corrrespondiente */
            })
         }else{/* si esta todo bien pasa a crear el usuario */
            let last = 0
        
            users_db.forEach(usuario => {        
                if(usuario.id > last){
                   last = usuario.id            
                }
            });
            
            /* requiro los campos pasados por el formulario */
            const {mail, nombre, apellido, pass1, birth, genero} = req.body;
            
            /* encripta la contraseña */
            let passHash = bcrypt.hashSync(pass1,12)       
            
                /* crea nuevo usuario */
                let newUser = {
                    id : +last + 1,
                    mail : mail.trim(),
                    nombre : nombre.trim(),
                    apellido : apellido.trim(),
                    pass1 : passHash,               
                    birth : birth,
                    image : req.files[0].filename || 'sin imagen',
                    genero : genero,
                    rol : 'usuario'
                }
        
                /* envia al nuevo usuario al json */
                users_db.push(newUser);
                setUsers(users_db);
                res.redirect('/users/login')
         }
        /* creo una variable para crear el usuario en el json */
        let last = 0
        
        users_db.forEach(usuario => {        
            if(usuario.id > last){
               last = usuario.id            
            }
        });
        
        /* requiro los campos pasados por el formulario */
        const {mail, nombre, apellido, pass1, birth, genero} = req.body;
        
        /* encripta la contraseña */
        let passHash = bcrypt.hashSync(pass1,12)       
        
            /* crrea nuevo usuario */
            let newUser = {
                id : +last + 1,
                mail : mail.trim(),
                nombre : nombre.trim(),
                apellido : apellido.trim(),
                pass1 : passHash,               
                birth : birth,
                image : req.files[0].filename,
                genero : genero,
                rol : 'usuario'
            }
    
            /* envia al nuevo usuario al json */
            users_db.push(newUser);
            setUsers(users_db);
            res.redirect('/users/login')
    },
    profile:(req,res)=>{
        res.render('profile')
    },
    logout : (req, res)=>{

    }
}

module.exports=usersController