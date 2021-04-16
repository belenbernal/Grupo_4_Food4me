const path = require('path');
const db = require('../database/models')
const fs = require('fs');


const superAdminController = {
    userList : (req,res) =>{
        let clients = db.Clientes.findAll()    
        let users = db.Usuarios.findAll({
            order: [
                ['last_name', 'ASC']
            ],
            where: {
                rol_id : 1
            }
        })
        Promise.all([users, clients])
        .then(([users, clients]) => {
            res.render('superAdmin/UsersList', {users, clients})
        })
        .catch((error) => res.send(error))
    },
    updateUser : (req, res)=>{
        const {client_id, roles_id}= req.body;
        const {id}=req.params;
        db.Usuarios.update({
            client_id,
            rol_id : +roles_id
        },
        {
            where:{
                id
            }
        })
        .then((users) => {
            res.redirect('/superadmin/adminList')
        })
        .catch((error) => res.send(error))
    },
    adminList : (req,res) =>{
        db.Usuarios.findAll({
            order: [
                ['last_name', 'ASC']
            ],
            where: {
                rol_id : 2
            }
        })
        .then((users) => {
            res.render('superAdmin/AdminList', { users })
        })
        .catch((error) => res.send(error))
    },
    adminDelete : (req, res)=>{
        const { id } = req.params

        let user = db.Usuarios.findOne({
            where: {
                id: id
            }
        })
            .then((user) => {
                db.Usuarios.destroy({
                    where: {
                        id: id
                    }
                })
                    .then(() => {
                        return res.render('/superAdmin/adminList');
                    })
                    .catch(error => res.send(error))
            })
            .catch(error => res.send(error))

    },
    clientList : (req,res) =>{
        db.Clientes.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
        .then((clients) => {
            res.render('superAdmin/clientList', { clients })
        })
        .catch((error) => res.send(error))
    },
    clientAdd : (req, res)=>{        
        res.render('superAdmin/clientAdd')
            
    },
    clientUpdate : (req,res) =>{
        const {name, phone, street, height, location, province} = req.body

        let address = db.Direcciones.create({
            calle : street,
            altura : height,
            localidad : location,
            provincia : province
        })
        .then((address)=>{
            db.Clientes.create({
                name,
                phone,
                address_id : address.id
            })
            .then((clients)=>{
                res.redirect('/superadmin/clientList')
            })
        })
        .catch((error) => res.send(error))
    },
    clientDelete : (req,res) =>{
        const { id } = req.params

        let cliente = db.Clientes.findOne({
            where: {
                id: id
            }
        })
        let direccionClient = db.Direcciones.destroy({
            where:{
                address_id: id
            }
        })
        let productosClient = db.Prductos.destroy({
            where: {
                client_id : id
            }
        })
        let adminClient = db.Usuarios.destroy({
            where: {
                client_id : id
            }
        })
        Promise.all([cliente, productosClient, adminClient, direccionClient])
            .then((user) => {
                db.Clientes.destroy({
                    where: {
                        id: id
                    }
                })
                    .then(() => {
                        return res.render('/superAdmin/clientList');
                    })
                    .catch(error => res.send(error))
            })
            .catch(error => res.send(error))
    }
}

module.exports = superAdminController