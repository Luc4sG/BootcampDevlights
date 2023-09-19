const Sequelize = require('sequelize');
const db = new Sequelize("Mysql://root:123456@localhost:3306/testt")

module.exports = db;

