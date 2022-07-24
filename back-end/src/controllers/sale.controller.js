const saleService = require('../services/sale');

module.exports = {
  create: async (req, res, next) => {
    try {
      const sale = await saleService.create(req.body);

      return !sale.message
        ? res.status(201).json(sale)
        : res.status(401).json({ message: sale.message });
    } catch (error) {
      next(error);
    }
  },

  list: async (_req, res, next) => {
    try {
      const sales = await saleService.list();

      return res.json(sales);
    } catch (err) {
      next(err);
    }
  },

  showSale: async (req, res, next) => {
    try {
      const { id } = req.params;

      const sale = await saleService.show({ id });

      return !sale.error
        ? res.json(sale)
        : res.status(404).json({ error: sale.error });
    } catch (error) {
      next(error);
    }
  },

  showSaleCostumer: async (req, res, next) => {
    try {
      const { id: saleId } = req.params;
      const { authorization } = req.headers;

      const sale = await saleService.showSaleCustomer({ saleId, authorization });

      return !sale.error
        ? res.json(sale)
        : res.status(404).json({ error: sale.error });
    } catch (error) {
      next(error);
    }
  },

  showSaleSeller: async (req, res, next) => {
    try {
      const { id: saleId } = req.params;
      const { authorization } = req.headers;

      const sale = await saleService.showSaleSeller({ saleId, authorization });

      return !sale.error
        ? res.json(sale)
        : res.status(404).json({ error: sale.error });
    } catch (error) {
      next(error);
    }
  },

  updateStatusPreparing: async (req, res, next) => {
    try {
      const { id } = req.params;

      const sale = await saleService.updateStatusPreparing({ id });

      return !sale.error
        ? res.json(sale)
        : res.status(404).json({ error: sale.error });
    } catch (error) {
      next(error);
    }
  },

  updateStatusDelivering: async (req, res, next) => {
    try {
      const { id } = req.params;

      const sale = await saleService.updateStatusDelivering({ id });

      return !sale.error
        ? res.json(sale)
        : res.status(404).json({ error: sale.error });
    } catch (error) {
      next(error);
    }
  },

  updateStatusDelivered: async (req, res, next) => {
    try {
      const { id } = req.params;

      const sale = await saleService.updateStatusDelivered({ id });

      return !sale.error
        ? res.json(sale)
        : res.status(404).json({ error: sale.error });
    } catch (error) {
      next(error);
    }
  },
};
