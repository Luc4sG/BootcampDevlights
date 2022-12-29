const express = require('express');
const apiRoutes = express.Router();

const userRoutes = require('./user');
const taskRoutes = require('./task');
const roleRoutes = require('./role');

apiRoutes.use('/users', userRoutes);
apiRoutes.use('/tasks', taskRoutes);
apiRoutes.use('/roles', roleRoutes);

module.exports = apiRoutes;
