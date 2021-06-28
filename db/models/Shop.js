const { SequelizeSlugify } = require("sequelize-slugify/lib/sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Shops = sequelize.define("Shop", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Shops, { source: ["name"] });

  return Shops;
};
