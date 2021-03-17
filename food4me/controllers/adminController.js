const fs = require('fs');
const path = require('path');
const { setProduct, getProduct } = require("../data/products");
const products = getProduct()
const db = require('../database/models')

const adminController = {
   
    productList: (req, res) => {
        db.Productos.findAll()
            .then((products)=>{
                res.render('admin/indexAdmin', {products})
            })
            .catch((error)=> res.send(error))
    },
    productAdd: (req, res) => {
        res.render('admin/productAdd')
    },
    newProduct: (req, res, next) => {
        let lastID = 0;
        products.forEach(product => {
            if (product.id > lastID) {
                lastID = product.id
            }
        });

        const { name, price, client, image, category, vegan, vegetarian, celiac } = req.body;

        let product = {
            id: lastID + 1,
            name,            
            price,
            client,
            image: req.files[0].filename,
            category,
            vegan,
            vegetarian,
            celiac
        }
        products.push(product);
        setProduct(products);
        res.redirect('/admin/list');
    },
    editProduct: (req, res) => { //method get
        let product = products.find(product => product.id === +req.params.id
        );
        res.render('admin/productEdit', {
            product
        })
    },
    updateProduct: (req, res, next) => { //method put

        const { name, price, client, image, category, vegan, vegetarian, celiac } = req.body;

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
        res.redirect('/admin/list');
    },
    productDelete: (req, res) => {
        products.forEach(product => {
            if (product.id === +req.params.id) {
                if (fs.existsSync(path.join('public', 'images', 'products', product.image))) {
                    fs.unlinkSync(path.join('public', 'images', 'products', product.image));
                }
                let eliminar = products.indexOf(product);
                products.splice(eliminar, 1);
            }
        });
        setProduct(products)
        res.redirect('/admin/list');

    }
}

module.exports = adminController