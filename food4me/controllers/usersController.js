const {getUser, setUser} = require('../data/users')
const users_db = getUser();
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


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
        let errores = validationResult(req)
        
        if(!errores.isEmpty()){
            res.render('register',{
                errores : errores.mapped()
            })
        }else{
            const {mail, nombre, apellido, pass1, birth, genero} = req.body;

            /* creo una variable para crear el usuario en el json */
            let last = 0
            
            users_db.forEach(usuario => {        
                if(usuario.id > last){
    
                   last = usuario.id            
                }
    
            });
    
            /* encripta la contraseña */
            let passHash1 = bcrypt.hashSync(pass1.trim(),10)  
    
                /* crrea nuevo usuario */
                let newUser = {
                    id : +last + 1,
                    mail : mail.trim(),
                    nombre : nombre.trim(),
                    apellido : apellido.trim(),
                    pass1 : passHash1,
                    birth : birth,
                    image : req.files[0].filename || 'sin imagen',
                    genero : genero                    
               
                
            }
             /* envia al nuevo usuario al json */
             users_db.push(newUser);
             setUser(users_db)
            res.redirect('/users/login')
        }
        /* requiro los campos pasados por el formulario */
       
    },
    logout : (req, res)=>{

    }
}

module.exports=usersController