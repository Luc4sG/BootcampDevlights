const express = require('express');
const userRoutes = require('./user');
const productRoutes = require('./product');
const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/product', productRoutes);

module.exports = apiRoutes;