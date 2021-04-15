const db = require('../database/models');

const indexController = {
    home: (req, res) => {
        res.render('home');
    },
    category: (req, res) => {

        db.Productos.findAll({            
            where: {
                category_id: req.params.id
            }
        })
            .then((products) => {
                res.render('menu', {products})
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
    theCompany: (req, res) => {
        res.render('theCompany')
    },
    team: (req, res) => {
        res.render('team')
    },
    questions: (req, res) => {
        res.render('questions')
    }

}
module.exports = indexController;