const { DataTypes } = require('sequelize');
const db = require('../models/index');

const taskModel = db.define('task', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = taskModel;
