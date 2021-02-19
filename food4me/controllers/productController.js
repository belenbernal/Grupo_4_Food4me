const fs = require("fs");
const path = require("path");
const products = require('../data/products')


const productController = {
    productList: (req, res) => { //method get
        res.render('indexAdmin', {
            products
        })
    },
    productAdd: (req, res) => { //method get
        res.render('productAdd')
    },
    newProduct: (req, res, next) => { //method post
        /*res.send(req.body)*/
        let lastID = 0;
        products.forEach(product => {
            if (product.id > lastID) {
                lastID = product.id
            }
        });

        const { name, description, price, client, image, category, vegan, vegetarian, celiac } = req.body;

        let product = {
            id: lastID + 1,
            name,
            description,
            price,
            client,
            image: req.files[0].filename,
            category,
            vegan,
            vegetarian,
            celiac
        }
        products.push(product);
        fs.writeFileSync('./data/products.json', JSON.stringify(products), 'utf-8');
        res.redirect('/');
    },
    productDetail: (req, res) => {
        let product = products.find(product => {
            return product.id == req.params.id
        });
        res.render('productDetail', {
            product
        })
    },
    editProduct: (req, res) => { //method get
        let product = products.find(product => product.id === +req.params.id
        );
        res.render('productEdit', {
            product
        })
    },
    updateProduct: (req, res, next) => { //method post

        const { name, description, price, client, image, category, vegan, vegetarian, celiac } = req.body;

        products.forEach(product => {
            if (product.id === +req.params.id) {
                if (fs.existsSync(path.join('public', 'images', 'products', product.image))) {
                    fs.unlinkSync(path.join('public', 'images', 'products', product.image));
                }

                product.id = +req.params.id;
                product.name = name;
                product.description = description;
                product.price = price;
                product.client = client;
                product.image = req.files[0].filename;
                product.category = category;
                product.vegan = vegan;
                product.vegetarian = vegetarian;
                product.celiac = celiac

            }
        });
        fs.writeFileSync('./data/products.json', JSON.stringify(products), 'utf-8');
        res.redirect('/');
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    search: (req, res) => { //falta validacion y editar vista
        const busqueda = req.query.buscar;

        const result = products.filter(product => {
            return product.name.toLowerCase().includes(busqueda.toLowerCase());
        });
        res.render('index', {
            products: result
        })
    },
    productDelete: (req, res) => {
        res.send('holaa')
        /* products.forEach(product => {
            if (product.id === +req.params.id) {
                if (fs.existsSync(path.join('public', 'images', 'products', product.image))) {
                    fs.unlinkSync(path.join('public', 'images', 'products', product.image));
                }
                let eliminar = products.indexOf(product);
                products.splice(eliminar, 1);
            }
        });
        fs.writeFileSync('./data/products.json', JSON.stringify(products), 'utf-8');
        res.redirect('indexAdmin') */
    }
}
module.exports = productController;
