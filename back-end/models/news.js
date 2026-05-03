const Sequelize = require("sequelize");

const sequelize = require("../db");
const News = sequelize.define("News", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    required: true,
  },

  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
  },
});

module.exports = News;
