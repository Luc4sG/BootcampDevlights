const express = require('express');
const userRoutes = express.Router();
const userModel = require('../models/user');

//Encontrar todos los usuarios
userRoutes.get('/', (req, res) => {
    userModel.find({}, (err, users) => {
        if (err) {
            res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        }
        if (!users) { 
            res.status(404).send({ message: 'No existen usuarios' });
        }
        if (users) {
            res.status(200).send({ users });
        }
    });
});

//Encontrar un usuario por id
userRoutes.get('/:id', (req, res) => {
    userModel.findOne( {id: req.params.id}, (err, user) => {
        if (err) {
            res.status(500).send({ message: `Error al realizar la petición: ${err}` });
            next();
        }
        if (!user) { 
            res.status(404).send({ message: 'El usuario no existe' });
        }
        if (user) {
            res.status(200).send({ user });
        }
    });
});

//Crear un usuario
userRoutes.post('/create', (req, res) => {
    const user = new userModel({
        id: req.body.id,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age
    });

    user
    .save()
    .then((document) => {
        res.status(200).send({ message: 'El usuario ha sido creado', document });
    })
    .catch((err) => {
        res.status(500).send({ message: `Error al crear el usuario: ${err}` });
    });
});

//Actualizar un usuario por id
userRoutes.put('/:id', (req, res) => {
    userModel.findOneAndUpdate({id: req.body.id}, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).send({ message: `Error al actualizar el usuario: ${err}` });
        }
        if (!user) {
            res.status(404).send({ message: 'El usuario no existe' });
        }
        if (user) {
            res.status(200).send({ message: 'El usuario ha sido actualizado', user });
        }
    });
});

//Eliminar un usuario por id
userRoutes.delete('/:id', (req, res) => {
    userModel.findOneAndRemove({id: req.params.id}, (err, user) => {
        if (err) {
            res.status(500).send({ message: `Error al eliminar el usuario: ${err}` });
        }
        if (!user) {
            res.status(404).send({ message: 'El usuario no existe' });
        }
        if (user) {
            res.status(200).send({ message: 'El usuario ha sido eliminado', user });
        }
    });
});

module.exports = userRoutes;


