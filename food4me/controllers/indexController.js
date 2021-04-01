const db = require('../database/models')

const indexController = {
    home: (req, res) => {
        res.render('home');
    },
    menu: (req, res) => {
        db.Productos.findAll()
            .then((products) => {
                res.render('menu', { products })
            })
            .catch((error) => res.send(error))
    },
    contact: (req, res) => {
        res.render('contact')
    },
    contactForm: (req, res) => {
        res.render('contact')
    },
    contactForCompany: (req, res) => {
        res.render('contactForCompany')
    },
    postContactCompany: (req, res) => {
        res.render('contactForCompany')
    },

}
module.exports = indexController;