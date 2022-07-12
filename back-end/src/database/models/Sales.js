const { DataTypes } = require('sequelize');

const Attributes = {
  id: { primaryKey: true, type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER, foreignKey: true },
  seller_id: { type: DataTypes.INTEGER, foreignKey: true },
  total_price: DataTypes.DECIMAL,
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.STRING,
  sale_date: DataTypes.DATE,
  status: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Sales = sequelize.define("Sale", Attributes, { modelName: 'sales' });

  Sale.associate = (models) => {
    Sale.belongsToMany(models.User, { foreignKey: 'user_id', as: 'user' });
  };

  Sale.associate = (models) => {
    Sale.belongsToMany(models.User, { foreignKey: 'seller_id', as: 'user' });
  };

  Product.associate = (models) => {
    Product.hasToMany(models.SalesProducts, { foreignKey: 'sale_id', as: 'sales_products' });
  };

  return Sales;
};
