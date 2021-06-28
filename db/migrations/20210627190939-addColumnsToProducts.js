"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Products", "name", Sequelize.STRING, {
      allowNull: false,
    });
    await queryInterface.addColumn("Products", "slug", Sequelize.STRING, {
      unique: true,
    });
    await queryInterface.addColumn("Products", "imageUrl", Sequelize.STRING);
    await queryInterface.addColumn("Products", "price", Sequelize.INTEGER, {
      defaultValue: 500,
      minimumValue: 500,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products", "name");
    await queryInterface.removeColumn("Products", "slug");
    await queryInterface.removeColumn("Products", "imageUrl");
    await queryInterface.removeColumn("Products", "price");
  },
};
