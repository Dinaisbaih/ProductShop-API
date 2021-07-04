const { SequelizeSlugify } = require("sequelize-slugify/lib/sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      minimumValue: 10,
    },
  });
  SequelizeSlugify.slugifyModel(Products, { source: ["name"] });
  Products.associate = (models) => {
    models.Shop.hasMany(Products, { foreignKey: "shopId", as: "products" });
    Products.belongsTo(models.Shop, { foreignKey: "shopId" });
  };
  return Products;
};
