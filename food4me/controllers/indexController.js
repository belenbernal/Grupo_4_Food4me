const { setProduct, getProduct } = require("../data/products");
const products = getProduct()


const indexController = {
    index: (req, res)=>{
        res.render('index', {
            products
        })
    },
    
}
module.exports = indexController;