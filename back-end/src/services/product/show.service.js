const Product = require('../../database/models/Products');

const ShowProductService = async ({ id }) => {
  const product = await Product.findByPk(id);

  if (!product) {
    return { message: 'Product not found' };
  }

  return product;
};

module.exports = ShowProductService;
