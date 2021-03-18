module.exports = (req, res, next) => {
    /* preguntamos si hay una sesion iniciada y si el rol del usuario es igual a admin */
    if(req.session.user && req.session.user.rol_id == 2) {
        /* si es verdadero, continua */
        next()
    }else{
        /* si es falso lo redirije a login */
        res.redirect('/users/login')
    }
}

