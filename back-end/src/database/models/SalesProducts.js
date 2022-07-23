const { DataTypes } = require('sequelize');

const Attributes = {
  saleId: DataTypes.INTEGER,
  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
};

module.exports = (sequelize) => {
  const SalesProducts = sequelize.define(
    "SalesProducts",
    Attributes,
    { tableName: 'salesProducts', timestamps: false, underscored: true },
  );

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(
      models.Products,
      {
        foreignKey: "saleId",
        otherKey: "productId",
        as: "products",
        through: SalesProducts,
      },
      models.Products.belongsToMany(models.Sales, {
        foreignKey: "productId",
        otherKey: "saleId",
        as: "sales",
        through: SalesProducts,
      })
    );
  };

  return SalesProducts;
};
