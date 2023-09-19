const { DataTypes } = require("sequelize");
const db = require( "../db.js");

const Professor = db.define("Student", {
    "id": {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
    "name": DataTypes.STRING,
    "email": DataTypes.STRING,
    "age": DataTypes.INTEGER,
    }
)

module.export = Professor;