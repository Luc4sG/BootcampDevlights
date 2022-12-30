const express = require('express');
const roleRoutes = require('./role');
const userRoutes = require('./user');
const taskRoutes = require('./task');


const apiRoutes = express.Router();

apiRoutes.use('/role', roleRoutes);
apiRoutes.use('/user', userRoutes);
apiRoutes.use('/task', taskRoutes);


module.exports = apiRoutes;