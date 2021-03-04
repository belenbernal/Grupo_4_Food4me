const { setProduct, getProduct } = require("../data/products");
const products = getProduct()


const indexController = {
    home: (req, res)=>{
        res.render('home');
    },
    menu: (req, res)=>{
        res.render('menu', {
            products
        })
    },
    contact: (req, res)=>{
        res.render('contact')
    }
    
}
module.exports = indexController;