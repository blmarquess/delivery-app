const { Products } = require('../../database/models');

const ShowProductService = async ({ id }) => {
  const product = await Products.findByPk(id);

  if (!product) {
    return { message: 'Product not found' };
  }

  return product;
};

module.exports = ShowProductService;
