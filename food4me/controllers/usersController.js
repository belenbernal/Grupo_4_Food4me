const fs = require('fs');
const path = require('path');
const { setUsers, getUsers } = require("../data/users");
const users = getUsers()

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
    }
}

module.exports=usersController