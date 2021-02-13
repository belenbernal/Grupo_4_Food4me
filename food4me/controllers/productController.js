const products = require('../data/products')

const productController = {
    productAdd: (req, res)=>{
        res.render('productAdd')
    },
    productDetail: (req, res)=>{
        res.render('productDetail')
    },
    carrito: (req, res)=>{
        res.render('carrito')
    }
}
module.exports = productController;