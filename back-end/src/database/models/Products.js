const { DataTypes } = require('sequelize');

const Attributes = {
  id: { primaryKey: true, type: DataTypes.INTEGER },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  url_image: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Products = sequelize.define("Products", Attributes, { modelName: 'products', timestamp: false });

  Products.associate = (models) => {
    Products.hasToMany(models.SalesProducts, { foreignKey: 'product_id', as: 'sales_products' });
  };

  return Products;
};
