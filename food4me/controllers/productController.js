const fs = require('fs');
const path = require('path');
const { setProduct, getProduct } = require("../data/products");
const products = getProduct()
const db = require('../database/models')

const productController = {
    
    productDetail: (req, res) => {
        let product = products.find(product => {
            return product.id == req.params.id
        });
        res.render('productDetail', {
            product
        })
    },   
    carrito: (req, res) => {
        res.render('carrito')
    },
    search: (req, res) => { //falta validacion y editar vista
        const busqueda = req.query.buscar;

        const result = products.filter(product => {
            return product.name.toLowerCase().includes(busqueda.toLowerCase());
        });
        res.render('menu', {
            products: result
        })
    },
    
}
module.exports = productController;
