const serviceUsers = require('../services/user/sellerListAll');

const getAllSellers = async (_req, res, next) => {
  try {
    const users = await serviceUsers();

    return res.status(201).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllSellers;
