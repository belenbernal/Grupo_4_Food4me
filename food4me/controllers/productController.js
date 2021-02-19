const fs = require("fs");
const products = require('../data/products')

const productController = {
    productAdd: (req, res)=>{ //method get
        res.render('productAdd')
    },
    newProduct: (req, res,next)=>{ //method post
        /*res.send(req.body)*/
        let lastID = 0;
        products.forEach(product => {
            if (product.id > lastID) {
                lastID = product.id
            }
        });

        const {name, description, price, client, image, category, vegan, vegetarian, celiac} = req.body;

        let product = {
            id: lastID + 1,
            name, 
            description, 
            price, 
            client, 
            image : req.files[0].filename, 
            category, 
            vegan, 
            vegetarian, 
            celiac
        }
        products.push(product);
        fs.writeFileSync('./data/products.json' , JSON.stringify(products), 'utf-8');
        res.redirect('/');
    },
    productDetail: (req, res)=>{
        let product = products.find(product=>{
            return product.id == req.params.id
        });
        res.render('productDetail', {
            product
        })
    },
    editProduct: (req, res)=>{ //method get
        let product = products.find(product=> product.id === +req.params.id
        );
        res.render('productEdit', {
            product
        })
    },
    updateProduct: (req, res,next)=>{ //method post
        
    },
    carrito: (req, res)=>{
        res.render('carrito')
    },
    search: (req, res)=>{ //falta validacion y editar vista
        const busqueda = req.query.buscar;

        const result = products.filter(product =>{
            return product.name.toLowerCase().includes(busqueda.toLowerCase());
        });
        res.render('index',{
            products : result
        })
    },
    productDelete: (req,res)=>{

    }
}
module.exports = productController;
