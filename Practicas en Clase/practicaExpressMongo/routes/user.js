const express = require('express');
const route = express.Router();
const userModel = require('../schemas/user');

route.get('/', (req, res) => {
    res.json({status:200, data:{}})
});

route.post('/create', (req, res) => {
    console.log(req.body);
    
    const user = new userModel({
        id: req.body.id,
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age
    });

    user.save()
    .then(document => {
        res.json({status:200, data:document})
    })
    .catch(error => {
        res.json({status:500, data:error})
    })


    res.json({status:200, data:{}})
});

module.exports = route;