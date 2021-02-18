const products = require('../data/products')

const productController = {
    productAdd: (req, res)=>{ //method get
        res.render('productAdd')
    },
    productCreate: (req, res)=>{ //method post

    },
    productDetail: (req, res)=>{  //method get
        res.render('productDetail')
    },
    productUpdate: (req, res)=>{  //method get
        res.render('productDetail')
    },
    carrito: (req, res)=>{
        res.render('carrito')
    },
    productDelete: (req,res)=>{

    }
}
module.exports = productController;
