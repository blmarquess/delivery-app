const { DataTypes } = require('sequelize');

const Attributes = {
  id: { primaryKey: true, type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER, foreignKey: true },
  seller_id: { type: DataTypes.INTEGER, foreignKey: true },
  total_price: DataTypes.DECIMAL(10, 2),
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.STRING,
  sale_date: DataTypes.STRING,
  status: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Sales = sequelize.define("Sales", Attributes, { modelName: 'sales', timestamp: false });

  Sales.associate = (models) => {
    Sales.belongsToMany(models.Users, { foreignKey: 'user_id', as: 'user' });
  };

  Sales.associate = (models) => {
    Sales.belongsToMany(models.Users, { foreignKey: 'seller_id', as: 'user' });
  };

  Sales.associate = (models) => {
    Sales.hasToMany(models.SalesProducts, { foreignKey: 'sale_id', as: 'sales_products' });
  };

  return Sales;
};
