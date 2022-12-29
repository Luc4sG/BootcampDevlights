const express = require('express');
const taskRoutes = express.Router();
const taskModel = require('../models/task');

//Encontrar todas las tareas
taskRoutes.get('/', (req, res) => {
    taskModel.find({}, (err, tasks) => {
        if (err) {
            res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        }
        if (!tasks) { 
            res.status(404).send({ message: 'No existen tareas' });
        }
        if (tasks) {
            res.status(200).send({ tasks });
        }
    });
});

//Encontrar una tarea por id
taskRoutes.get('/:id', (req, res) => {
    taskModel.findOne( {id: req.params.id}, (err, task) => {
        if (err) {
            res.status(500).send({ message: `Error al realizar la petición: ${err}` });
            next();
        }
        if (!task) { 
            res.status(404).send({ message: 'La tarea no existe' });
        }
        if (task) {
            res.status(200).send({ task });
        }
    });
});

//Crear una tarea
taskRoutes.post('/create', (req, res) => {
    const task = new taskModel({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    });

    task
    .save()
    .then((document) => {
        res.status(200).send({ message: 'La tarea ha sido creada', document });
    })
    .catch((err) => {
        res.status(500).send({ message: `Error al crear la tarea: ${err}` });
    });
});

//Actualizar una tarea por id
taskRoutes.put('/:id', (req, res) => {
    taskModel.findOneAndUpdate({id: req.body.id }, req.body , { new: true }, (err, task) => {
        if (err) {
            res.status(500).send({ message: `Error al actualizar la tarea: ${err}` });
        }
        if (!task) {
            res.status(404).send({ message: 'La tarea no existe' });
        }
        if (task) {
            res.status(200).send({ message: 'La tarea ha sido actualizada', task });
        }
    });
});

//Eliminar una tarea por id
taskRoutes.delete('/:id', (req, res) => {
    taskModel.findOneAndRemove({id: req.params.id }, (err, task) => {
        if (err) {
            res.status(500).send({ message: `Error al eliminar la tarea: ${err}` });
        }
        if (!task) {
            res.status(404).send({ message: 'La tarea no existe' });
        }
        if (task) {
            res.status(200).send({ message: 'La tarea ha sido eliminada', task });
        }
    });
});

module.exports = taskRoutes;
