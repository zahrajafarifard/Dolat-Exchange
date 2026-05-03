const Sequelize = require("sequelize");

const sequelize = require("../db");
const Gallery = sequelize.define("Gallery", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    required: true,
  },

  images: {
    type: Sequelize.STRING,
  },
});

module.exports = Gallery;
