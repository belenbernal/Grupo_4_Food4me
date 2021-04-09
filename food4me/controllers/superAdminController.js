const path = require('path');
const db = require('../database/models')
const fs = require('fs');
const { validationResult } = require('express-validator');

const superAdminController = {
    userList : (req,res) =>{
        db.Usuarios.findAll({
            order: [
                ['last_name', 'ASC']
            ]
        })
        .then((users) => {
            res.render('superAdmin/UsersList', { users })
        })
        .catch((error) => res.send(error))
    },
    userEdit : (req,res) =>{

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
            res.render('superAdmin/UsersList', { users })
        })
        .catch((error) => res.send(error))
    },
    clientList : (req,res) =>{
        db.Clientes.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
        .then((users) => {
            res.render('superAdmin/UsersList', { users })
        })
        .catch((error) => res.send(error))
    },
    clientEdit : (req,res) =>{

    },
    clientDelete : (req,res) =>{

    },
}

module.exports = superAdminController