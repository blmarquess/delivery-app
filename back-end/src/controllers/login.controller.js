const loginService = require('../services/login/login.service');

const LoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await loginService({ email, password });

    return !token.message
      ? res.json(token)
      : res.status(404).json({ message: token.message });
  } catch (error) {
    next(error);
  }
};

module.exports = LoginController;
