const db = require('../database/models')

const indexController = {
    home: (req, res) => {
        res.render('home');
    },
    menu: (req, res) => {
        db.Productos.findAll()
            .then((products) => {
                /* res.send(products) */
                res.render('menu', { products })
            })
            .catch((error) => res.send(error))
    },
    contact: (req, res) => {
        res.render('contact')
    }

}
module.exports = indexController;