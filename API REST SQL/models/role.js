const { DataTypes } = require('sequelize');
const db = require('../models/index');

const roleModel = db.define('role', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = roleModel;
