"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Galleries", [
      {
        images: "images/img (1).jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        images: "images/img (2).jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        images: "images/img (3).jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        images: "images/img (4).jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        images: "images/img (5).jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        images: "images/img (6).jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Galleries", null, {});
  },
};
