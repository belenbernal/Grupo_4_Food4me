module.exports = (req, res, next) => {
    /* preguntamos si la sesion esta levantada */
    if(req.session.user) {
        /* si es true continua la ejecucion */
        next()
    }else{
        /* si es false, redirige a login */
        res.redirect('/users/login')
    }
}