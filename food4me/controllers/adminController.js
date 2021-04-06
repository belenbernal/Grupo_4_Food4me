const db = require('../database/models')
const fs = require('fs');
const { validationResult } = require('express-validator');

const adminController = {

    productList: (req, res) => {
        db.Productos.findAll({
            order: [
                ['name', 'ASC']
            ],
            where: {
                client_id: req.session.user.client_id
            }
        })
            .then((products) => {
                res.render('admin/indexAdmin', { products })
            })
            .catch((error) => res.send(error))
    },
    productAdd: (req, res) => {
        db.Categorias.findAll()
            .then(categorias => {
                res.render('admin/productAdd', {
                    categorias
                })
            })
    },
    newProduct: (req, res) => {

        let errores = validationResult(req);

        if (errores.isEmpty()) {
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
        } else {
            db.Categorias.findAll()
                .then(categorias => {
                    res.render('admin/productAdd', {
                        categorias,
                        errores: errores.mapped(),
                        datos: req.body
                    })
                })
        }

    },
    editProduct: (req, res) => {
        let product = db.Productos.findOne({
            where: {
                id: req.params.id
            }
        })
        let categories = db.Categorias.findAll();
        let product_types = db.TipoProductos.findAll();

        Promise.all([product, categories, product_types])
            .then(([product, categories, product_types]) => {
                res.render("admin/productEdit", {
                    product,
                    categories,
                    product_types
                })
            })
            .catch((error) => { res.send(error) })
    },
    updateProduct: (req, res) => {

        let errores = validationResult(req);

        if (errores.isEmpty()) {

            const { name, price, category, description, types } = req.body;
            const { id } = req.params;

            db.Productos.findByPk(id)
                .then((product) => {
                    if (fs.existsSync('public/images/products/' + product.image)) { 
                        fs.unlinkSync('public/images/products/' + product.image)
                    }
                })
                .catch(error => res.send(error))

            db.Productos.update({
                name,
                description,
                price,
                image: req.files[0] ? req.files[0].filename : undefined,
                category_id: category,
                client_id: req.session.user.client_id
            }, {
                where: {
                    id: id
                }
            })
                .then((product) => {
                    db.TipoProductos.destroy({
                        where: {
                            product_id: id
                        }
                    })
                        .then(() => {
                            const typesArray = [...(types.length ? types : [types])]

                            if (typesArray) {
                                const createTypes = typesArray.map((type) => {
                                    return db.TipoProductos.create({
                                        product_id: id,
                                        type_id: type
                                    })
                                })

                                Promise.all(createTypes)
                                    .then(() => {
                                        res.redirect('/admin/list')
                                    })
                                    .catch(error => { res.send(error) })
                            } else {
                                res.redirect('/admin/list')
                            }
                        })
                })
                .catch((error) => { res.send(error) })
        } else {
            let product = db.Productos.findOne({
                where: {
                    id: req.params.id
                }
            })
            let categories = db.Categorias.findAll();
            let product_types = db.TipoProductos.findAll();

            Promise.all([product, categories, product_types])
                .then(([product, categories, product_types]) => {
                    res.render("admin/productEdit", {
                        product,
                        categories,
                        product_types,
                        errores: errores.mapped(),
                        datos: req.body
                    })
                })
                .catch((error) => { res.send(error) })
        }
    },
    productDelete: (req, res) => {

        const { id } = req.params;

        let typesDelete = db.TipoProductos.destroy({
            where: {
                product_id: id
            }
        })

        let cartDelete = db.Carts.destroy({
            where: {
                product_id: id
            }
        })

        let product = db.Productos.findOne({
            where: {
                id: id
            }
        })
            .then((product) => {
                fs.unlinkSync('public/images/products/' + product.image)
            })

        Promise.all([typesDelete, cartDelete, product])
            .then(() => {
                db.Productos.destroy({
                    where: {
                        id: id
                    }
                })
                    .then(() => {
                        return res.redirect('/admin/list');
                    })
                    .catch(error => res.send(error))
            })
            .catch(error => res.send(error))

    }
}

module.exports = adminController