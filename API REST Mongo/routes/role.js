const express = require('express');
const roleRoutes = express.Router();
const roleModel = require('../models/role');

//Encontrar todos los roles
roleRoutes.get('/', (req, res) => {
    roleModel.find({}, (err, roles) => {
        if (err) {
            res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        }
        if (!roles) { 
            res.status(404).send({ message: 'No existen roles' });
        }
        if (roles) {
            res.status(200).send({ roles });
        }
    });
});

//Encontrar un rol por id
roleRoutes.get('/:id', (req, res) => {
    roleModel.findOne( {id: req.params.id}, (err, role) => {
        if (err) {
            res.status(500).send({ message: `Error al realizar la petición: ${err}` });
            next();
        }
        if (!role) { 
            res.status(404).send({ message: 'El rol no existe' });
        }
        if (role) {
            res.status(200).send({ role });
        }
    });
});

//Crear un rol
roleRoutes.post('/create', (req, res) => {
    const role = new roleModel({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    });

    role
    .save()
    .then((document) => {
        res.status(200).send({ message: 'El rol ha sido creado', document });
    })
    .catch((err) => {
        res.status(500).send({ message: `Error al crear el rol: ${err}` });
    });
});

//Actualizar un rol por id
roleRoutes.put('/:id', (req, res) => {
    roleModel.findOneAndUpdate({id: req.body.id }, req.body, { new: true }, (err, role) => {
        if (err) {
            res.status(500).send({ message: `Error al actualizar el rol: ${err}` });
        }
        if (!role) {
            res.status(404).send({ message: 'El rol no existe' });
        }
        if (role) {
            res.status(200).send({ message: 'El rol ha sido actualizado', role });
        }
    });
});

//Eliminar un rol por id
roleRoutes.delete('/:id', (req, res) => {
    roleModel.findOneAndRemove({id:req.params.id}, (err, role) => {
        if (err) {
            res.status(500).send({ message: `Error al eliminar el rol: ${err}` });
        }
        if (!role) {
            res.status(404).send({ message: 'El rol no existe' });
        }
        if (role) {
            res.status(200).send({ message: 'El rol ha sido eliminado', role });
        }
    });
});

module.exports = roleRoutes;


// encontrar por todos, encontrar por id, actualizar por id, eliminar por id



