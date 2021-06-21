module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      minimumValue: 10,
    },
  });
};
