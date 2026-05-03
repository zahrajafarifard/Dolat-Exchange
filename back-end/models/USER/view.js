const { DataTypes } = require("sequelize");
const db = require("../../db");

const View = db.define("View", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    require: true,
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = View;
