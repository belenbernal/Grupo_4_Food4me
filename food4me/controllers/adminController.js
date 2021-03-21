const path = require('path');
const db = require('../database/models')

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

        const { name, price, category, description, types } = req.body;
        const { id } = req.params;

        db.Productos.update({
            name,
            description,
            price,
            image: req.files[0].filename,
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