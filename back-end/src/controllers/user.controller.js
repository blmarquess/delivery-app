const userService = require('../services/user');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const user = await userService.create({ name, email, password });

      return !user.message
        ? res.status(201).json(user)
        : res.status(409).json({ message: user.message });
    } catch (error) {
      next(error);
    }
  },

  list: async (req, res, next) => {
    try {
      const users = await userService.list();

      return res.json(users);
    } catch (error) {
      next(error);
    }
  },

  listSeller: async (_req, res, next) => {
    try {
      const sellers = await userService.listSeller();

      return res.json({ sellers });
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await userService.show({ id });

      return !user.error
        ? res.json(user)
        : res.status(404).json({ error: user.error });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, email, password, role } = req.body;

      const user = await userService.update({ id, name, email, password, role });

      return !user.error
        ? res.json(user)
        : res.status(404).json({ error: user.error });
    } catch (error) {
      next(error);
    }
  },

  remove: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await userService.remove({ id });

      return !user.error
        ? res.end()
        : res.status(404).json({ error: user.error });
    } catch (error) {
      next(error);
    }
  },
};
