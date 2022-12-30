const { DataTypes } = require('sequelize');
const db = require('../models/index');

const userModel = db.define('user', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
});

module.exports = userModel;
