const { DataTypes } = require('sequelize');

const Attributes = {
  id: { primaryKey: true, type: DataTypes.INTEGER },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  url_image: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Products = sequelize.define("Products", Attributes, { tableName: 'products', timestamps: false });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, { foreignKey: 'product_id', as: 'sales_products' });
  };

  return Products;
};
