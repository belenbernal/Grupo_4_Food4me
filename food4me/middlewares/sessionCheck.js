module.exports = (req,res,next) => {
    if(!req.session.user){
        next()
    }else{
        res.redirect('profile')
    }
}

/* si el user esta logeado no puede ingresar a las vistas de login o register */