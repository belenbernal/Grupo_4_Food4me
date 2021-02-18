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
    search: (req, res)=>{
        const busqueda = req.query.buscar;

        const result = products.filter(product =>{
            return product.name.includes(busqueda);
        });
        res.render('index',{
            products : result
        })
    },
    productDelete: (req,res)=>{

    }
}
module.exports = productController;
