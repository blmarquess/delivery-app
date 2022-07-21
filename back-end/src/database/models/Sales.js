const { DataTypes } = require('sequelize');

const Attributes = {
  userId: DataTypes.INTEGER,
  sellerId: DataTypes.INTEGER,
  totalPrice: DataTypes.DECIMAL(9, 2),
  deliveryAddress: DataTypes.STRING,
  deliveryNumber: DataTypes.STRING,
  saleDate: DataTypes.DATE,
  status: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Sales = sequelize.define(
    "Sales",
    Attributes,
    { tableName: 'sales', timestamps: false, underscored: true },
  );

  Sales.associate = (models) => {
    Sales.belongsToMany(
      models.Users,
      { foreignKey: 'userId', otherKey: 'id', as: 'costumer', through: Sales, exclude: ['password'] },
    );
  };

  Sales.associate = (models) => {
    Sales.belongsToMany(
      models.Users,
      { foreignKey: 'sellerId', otherKey: 'id', as: 'seller', through: Sales, exclude: ['password'] },
    );
  };

  return Sales;
};
