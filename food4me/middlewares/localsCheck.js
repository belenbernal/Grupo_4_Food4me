module.exports = (req,res,next) => {
    /* preguntamos si la sesion esta levantada */
    if(req.session.user){
        res.locals.user = req.session.user
    }
    next()
}