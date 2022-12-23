const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const log = require('./middlewares/log');
const authentication = require('./middlewares/authentication');


app.use(log); // This is a middleware that will be executed for every request | middleware a nivel global
app.use(express.json()); // This is a middleware that will be executed for every request | middleware a nivel global

app.use("/user",authentication, userRoute);
app.use("/", (req, res) => {
    res.send("Hello World")
});





//Conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017', error => {
    if (error) {
        console.log('Error al conectar a la base de datos');
    } else {
    console.log('Conexión exitosa');
    }
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});