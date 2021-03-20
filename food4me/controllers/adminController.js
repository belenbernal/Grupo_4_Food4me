const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');

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
        let errores = validationResult(req);
        if (errores.isEmpty) {


            const { name, price, category, types, description } = req.body;
            db.Productos.create({
                name,
                description,
                price,
                image: req.files[0].filename,
                category_id: category,
                client_id: req.session.user.client_id
            })
                .then((product) => {
                    const typesArray = [...(types.length ? types : [types])]
                    /* preguntamos si lo que llega por parametro es un array o no, si es un array, lo guardamos
                     en la constante typesArray, si no es un array, lo convertimos a array y lo guardamos*/


                    /* console.log(typesArray); */
                    if (typesArray) {

                        /* Recorremos el array y vamos cargando esos datos en la tabla pivot */
                        const createTypes = typesArray.map((type) => {
                            return db.TipoProductos.create({
                                product_id: product.id,
                                type_id: type
                            })
                        })
                        /* console.log(createTypes); */
                        Promise.all(createTypes)
                            .then(() => {
                                res.redirect('/admin/list')
                            })
                            .catch(error => { res.send(error) })
                    } else {
                        res.redirect('/admin/list')
                    }

                })
                .catch((error) => { res.send(error) })
        }else{
            return res.redirect('/admin/list', {
                errores: errores.mapped(),
                datos: req.body
            });
        }
        },
        editProduct: (req, res) => {
            db.Productos.findByPk(req.params.id)
                .then((product) => {
                    res.render("admin/productEdit", { product })
                })
                .catch((error) => { res.send(error) })
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