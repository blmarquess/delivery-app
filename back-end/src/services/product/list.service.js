const Product  = require('../../database/models/Products');

const ListProductService = async () => {
  const products = await Product.findAll();

  return products;
};

module.exports = ListProductService;