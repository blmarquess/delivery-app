const { Products } = require('../../database/models');

const ListProductService = async () => {
  const products = await Products.findAll();

  return products;
};

module.exports = ListProductService;
