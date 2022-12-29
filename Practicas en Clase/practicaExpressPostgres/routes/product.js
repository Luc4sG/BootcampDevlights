const express = require('express');
const productRoutes = express.Router();

productRoutes.get('/', (req, res) => {
    res.json({status:200,data:[]});
});

module.exports = productRoutes;