module.exports = (req,res,next) => {
    /* preguntamos si hay una cookie creada */
    if(req.cookies.userFood4me){
        /*  */
        req.session.user = req.cookies.userFood4me;
    }
    next()
}