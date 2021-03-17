const { setProduct, getProduct } = require("../data/products");
const products = getProduct()
const db = require('../database/models')

const indexController = {
    home: (req, res) => {
        res.render('home');
    },
    menu: (req, res) => {
        /*  res.render('menu', {
             products
         }) */
        db.Productos.findAll()
            .then((products) => {
                res.send(products)
                /* res.render('menu', { products }) */
            })
            .catch((error) => res.send(error))
    },
    contact: (req, res) => {
        res.render('contact')
    }

}
module.exports = indexController;