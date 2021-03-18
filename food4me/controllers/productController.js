const fs = require('fs');
const path = require('path');
const { setProduct, getProduct } = require("../data/products");
const { sequelize } = require('../database/models');
const products = getProduct()
const db = require('../database/models')
const {Op} = require('sequelize');

const productController = {
    
    productDetail: (req, res) => {
        /* let product = products.find(product => {
            return product.id == req.params.id
        });
        res.render('productDetail', {
            product
        }) */
        db.Productos.findByPk(req.params.id) //asociaciones
            .then((product)=>{
                res.render('productDetail', {product})
            })
            .catch((error)=>{res.send(error)})
    },   
    carrito: (req, res) => {
        res.render('carrito')
    },
    search: (req, res) => { //falta validacion y editar vista
        
        let buscar = req.query.buscar;

        db.Productos.findAll({
            where :{
                name : {
                    [Op.substring] : buscar
                }
            }
        })
        .then(products =>{ 
            return res.render('menu', {
                products
            })
                   
        })
        .catch((error)=> res.send(error))       
        
    }
    
    
}
module.exports = productController;
