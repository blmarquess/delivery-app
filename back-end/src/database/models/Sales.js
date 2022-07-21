const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    onDelete: "CASCADE",
    references: {
      model: "users",
      key: "id",
    },
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    onDelete: "CASCADE",
    references: {
      model: "users",
      key: "id",
    },
  },
  totalPrice: DataTypes.DECIMAL(9, 2),
  deliveryAddress: DataTypes.STRING,
  deliveryNumber: DataTypes.STRING,
  saleDate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  status: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Sales = sequelize.define(
    "Sales",
    Attributes,
    { tableName: 'sales', timestamps: false, underscore: true },
  );

  Sales.associate = (models) => {
    Sales.belongsToMany(
      models.Users,
      { foreignKey: 'userId', otherKey: 'id', as: 'costumer', through: Sales },
    );
  };

  Sales.associate = (models) => {
    Sales.belongsToMany(
      models.Users,
      { foreignKey: 'sellerId', otherKey: 'id', as: 'seller', through: Sales },
    );
  };

  return Sales;
};
