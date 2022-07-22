const saleService = require('../services/sale/create.service');
const serviceGetAll = require('../services/sale/getAllSales');

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
  getAll: async (_req, res, next) => {
    try {
    const sales = await serviceGetAll.getAll();

    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
  },
};
