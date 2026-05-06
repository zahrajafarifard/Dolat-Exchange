"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("CurrencyPrices", "pSellPrice", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("CurrencyPrices", "pBuyPrice", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("CoinPrices", "pSellPrice", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("CoinPrices", "pBuyPrice", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("CurrencyPrices", "pSellPrice");
    await queryInterface.removeColumn("CurrencyPrices", "pBuyPrice");

    await queryInterface.removeColumn("CoinPrices", "pSellPrice");
    await queryInterface.removeColumn("CoinPrices", "pBuyPrice");
  },
};
