const express = require('express');
const taskRoutes = express.Router();
const taskModel = require('../models/task');

//Encontrar todas las tareas
taskRoutes.get('/', async (req, res) => {
    const data = await taskModel.find({});
    res.status(200).send({ message: 'Tareas encontradas', data });
});

//Encontrar una tarea por id
taskRoutes.get('/:id', async (req, res) => {
    const data = await taskModel.findOne({id: req.params.id});
    res.status(200).send({ message: 'Tarea encontrada', data });
});

//Crear una tarea
taskRoutes.post('/create', async (req, res) => {
    const task = new taskModel({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    });

    const data = await task.save();
    res.status(200).send({ message: 'Tarea creada', data });
});

//Actualizar una tarea por id   
taskRoutes.put('/:id', async (req, res) => {
    const data = await userModel.update(
        {
            name: req.body.name,
            description: req.body.description
        },
        {where: {id: req.params.id}}
    );

    res.status(200).send({ message: 'Tarea actualizada', data });
});

//Eliminar una tarea por id
taskRoutes.delete('/:id', async (req, res) => {
    const data = await taskModel.destroy(
        {where: {id: req.params.id}}
    ).then((data) => {
    res.status(200).send({ message: 'Tarea eliminada', data });
});
});

module.exports = taskRoutes;
    
