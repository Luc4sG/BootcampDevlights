const sequelize = require('sequelize');
const db = new sequelize('postgres://postgres:123456@localhost:5432/apiPostgres');

module.exports = db;