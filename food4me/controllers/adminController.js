const path = require('path');
const db = require('../database/models')

const adminController = {

    productList: (req, res) => {
        db.Productos.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
            .then((products) => {
                res.render('admin/indexAdmin', { products })
            })
            .catch((error) => res.send(error))
    },
    productAdd: (req, res) => {
        res.render('admin/productAdd')
    },
    newProduct: (req, res, next) => {
        const { name, price, client, image, category, vegan, vegetarian, celiac } = req.body;
        
        db.Productos.create({
            name,
            description,
            price,
            image:req.files[0].filename,
            category_id: category,
            client_id :client
        })
        .then(()=>{
            res.redirect('/admin/list')
        })
        .catch((error)=>{res.send(error)})        
    },
    editProduct: (req, res) => {
        db.Productos.findByPk(req.params.id)
            .then((product) => {
                res.render("admin/productEdit", {product})
            })
            .catch((error) => {res.send(error)})
    },
    updateProduct: (req, res, next) => {

        /* const { name, price, client, image, category, vegan, vegetarian, celiac } = req.body;

        products.forEach(product => {
            if (product.id === +req.params.id) {
                if (fs.existsSync(path.join('public', 'images', 'products', product.image))) {
                    fs.unlinkSync(path.join('public', 'images', 'products', product.image));
                }
                product.id = +req.params.id;
                product.name = name;
                product.price = price;
                product.client = client;
                product.image = req.files[0].filename;
                product.category = category;
                product.vegan = vegan;
                product.vegetarian = vegetarian;
                product.celiac = celiac

            }
        });
        setProduct(products)
        res.redirect('/admin/list'); */
    },
    productDelete: (req, res) => {
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.redirect('/admin/list');
            })
            .catch(error => res.send(error))
    } 
}

module.exports = adminController