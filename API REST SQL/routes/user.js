const express = require('express');
const userRoutes = express.Router();
const userModel = require('../models/user');

//Obetener todos los usuarios
userRoutes.get('/', async (req, res) => {
    const data = await userModel.findAll();
    res.status(200).send({ message: 'Usuarios encontrados', data });
});

//Obtener un usuario por id
userRoutes.get('/:id', async (req, res) => {
    const data = await userModel.findOne(
        {where: {id: req.params.id}}
    );

    res.status(200).send({ message: 'Usuario encontrado', data });
});

//Crear un usuario
userRoutes.post('/create', async (req, res) => {
    const data = await userModel.create({
        id: req.body.id,
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age
    });

    res.status(200).send({ message: 'Usuario creado', data });
});

//Actualizar un usuario por id
userRoutes.put('/:id', async (req, res) => {
    const data = await userModel.update(
        {
            name: req.body.name,
            lastName: req.body.lastName,
            age: req.body.age
        },
        {where: {id: req.params.id}}
    );

    res.status(200).send({ message: 'Usuario actualizado', data });
});

//Eliminar un usuario por id
userRoutes.delete('/:id', async (req, res) => {
    const data = await userModel.destroy(
        {where: {id: req.params.id}}
    ).then((data) => {
    res.status(200).send({ message: 'Usuario eliminado', data });
});
});

module.exports = userRoutes;



