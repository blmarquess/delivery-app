const productService = require('../services/product');

module.exports = {
  list: async (req, res, next) => {
    try {
      const products = await productService.list();

      return res.json(products);
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await productService.show({ id });

      return !product.error
        ? res.json(product)
        : res.status(404).json({ error: product.error });
    } catch (error) {
      next(error);
    }
  },
};
