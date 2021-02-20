const fs = require('fs');
const path = require('path');
const { setProduct, getProduct } = require("../data/products");
const products = getProduct()


const adminController = {
    admin : (req, res) => {
        res.render('admin/indexAdmin',{
            products
        })
    }
}

module.exports = adminController