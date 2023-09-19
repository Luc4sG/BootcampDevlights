const { DataTypes } = require("sequelize");
const db = require( "../db.js");

const Course = db.define("Course", {
    "id": {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
    "name": DataTypes.STRING,
    "classroom": DataTypes.STRING,
    "info": DataTypes.STRING,
    }
)

module.export = Course;