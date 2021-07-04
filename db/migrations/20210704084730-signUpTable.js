"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: { type: Sequelize.INTEGER },
      username: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      createdAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
