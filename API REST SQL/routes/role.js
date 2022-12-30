const express = require('express');
const roleRoutes = express.Router();
const roleModel = require('../models/role');

//Encontrar todos los roles
roleRoutes.get('/', async (req, res) => {
    const data = await roleModel.find({});
    res.status(200).send({ message: 'Roles encontrados', data });
});

//Encontrar un rol por id
roleRoutes.get('/:id', async (req, res) => {
    const data = await roleModel.findOne({id: req.params.id});
    res.status(200).send({ message: 'Rol encontrado', data });
});

//Crear un rol
roleRoutes.post('/create', async (req, res) => {
    const role = new roleModel({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    });

    const data = await role.save();
    res.status(200).send({ message: 'Rol creado', data });
});

//Actualizar un rol por id
roleRoutes.put('/:id', async (req, res) => {
    const data = await roleModel.updateOne(
        {id: req.params.id},
        {
            name: req.body.name,
            description: req.body.description
        }
    );
    res.status(200).send({ message: 'Rol actualizado', data });
});

//Eliminar un rol por id
roleRoutes.delete('/:id', async (req, res) => {
    const data = await roleModel.destroy( 
        {where : {id: req.params.id}} 
        ).then((data) => {
        res.status(200).send({ message: 'Rol eliminado', data });
    });
});

module.exports = roleRoutes;
