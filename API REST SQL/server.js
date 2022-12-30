const express = require('express');
const app = express();
const log = require('./middlewares/log');
const db = require('./models/index');
const apiRoutes = require('./routes/index');


app.use(log)
app.use(express.json());

app.use('/api', apiRoutes);

db.sync().then(() => {
    console.log('Conexion exitosa');
}).catch(error => {
    console.log('Error al conectar a la base de datos');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
    }
);
