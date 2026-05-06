"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Coins", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("CoinPrices", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      CoinId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Coins",
          key: "id",
        },
        onDelete: "CASCADE",
      },

      buyPrice: Sequelize.INTEGER,
      sellPrice: Sequelize.INTEGER,
      pSellPrice: Sequelize.INTEGER,
      pBuyPrice: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Coins");
    await queryInterface.dropTable("CoinPrices");
  },
};
