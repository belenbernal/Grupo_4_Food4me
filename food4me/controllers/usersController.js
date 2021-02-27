const fs = ('fs')
const {getUser, setUser} = require('../data/users')
const users = getUser();
const bcrypt = require('bcrypt')


const usersController = {
    login:(req,res)=> {
        res.render('login')
    },
    processLogin:(req,res)=>{
        res.send(req.body)
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
    logout : (req, res)=>{

    }
}

module.exports=usersController