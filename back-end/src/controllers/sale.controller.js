const saleService = require('../services/sale/create.service');

module.exports = {
  create: async (req, res, next) => {
    try {
      const sale = await saleService(req.body);

      return !sale.message
        ? res.status(201).json(sale)
        : res.status(401).json({ message: sale.message });
    } catch (error) {
      next(error);
    }
  },
};
