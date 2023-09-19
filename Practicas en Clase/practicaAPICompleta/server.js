const express = require('express');
const app = express();
const log = require('./middlewares/log');
const db = require('./db.js');
const apiRoutes = require('./routes/index');
const Associations = require('./models/associations')();

app.use(log)
app.use(express.json());

// app.use('/api', apiRoutes);

db.sync().then(() => {
    console.log('Conexion exitosa');
}).catch(error => {
    console.log('Error al conectar a la base de datos');
    console.log(error)
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
    }
);
