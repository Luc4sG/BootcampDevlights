const express = require('express');
const app = express();
const log = require('./middlewares/log');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

app.use(log);
app.use(express.json());
app.use("/api", apiRoutes);



//Conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/apiRest', error => {
    if (error) {
        console.log('Error al conectar a la base de datos');
    } else {
    console.log('Conexión exitosa');
    }
});
mongoose.set('useFindAndModify', false);

app.listen(3000, () => {
    console.log('Server on port 3000');
});
