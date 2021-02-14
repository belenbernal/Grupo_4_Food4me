const products = require('../data/products');


const indexController = {
    index: (req, res)=>{
        res.render('index', {
            products
        })
    },
    
}
module.exports = indexController;