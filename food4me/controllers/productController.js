const productController = {
    productAdd: (req, res)=>{
        res.render('productAdd')
    },
    productDetail: (req, res)=>{
        res.render('productDetail')
    },
}
module.exports = productController;