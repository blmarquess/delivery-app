const { DataTypes } = require('sequelize');

const Attributes = {
  id: { primaryKey: true, type: DataTypes.INTEGER },
  sale_id: { type: DataTypes.INTEGER, foreignKey: true },
  product_id: { type: DataTypes.INTEGER, foreignKey: true },
  quantity: DataTypes.INTEGER,
};

module.exports = (sequelize) => {
  const SalesProducts = sequelize.define("SalesProducts", Attributes, { tableName: 'salesProducts', timestamps: false });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.Sales, { foreignKey: 'sale_id', as: 'sale', through: SalesProducts });
  };

  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.Products, { foreignKey: 'product_id', as: 'product', through: SalesProducts });
  };

  return SalesProducts;
};
