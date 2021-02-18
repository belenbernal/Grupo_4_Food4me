const products = require('../data/products')

const productController = {
    productAdd: (req, res)=>{ //method get
        res.render('productAdd')
    },
    productDetail: (req, res)=>{
        let product = products.find(product=>{
            return product.id == req.params.id
        });
        res.render('productDetail', {
            product
        })
    },
    carrito: (req, res)=>{
        res.render('carrito')
    },
    productDelete: (req,res)=>{

    }
}
module.exports = productController;
