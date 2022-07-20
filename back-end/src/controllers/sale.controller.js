const saleService = require('../services/sale/create.service');

const SaleController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await saleService({ email, password });

    return !token.message
      ? res.json(token)
      : res.status(401).json({ message: token.message });
  } catch (error) {
    next(error);
  }
};

module.exports = SaleController;
