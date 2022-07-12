const loginService = require('../services/login.service');

const LoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    return token.error
      ? res.json(token)
      : res.status(401).json({ error: token.error });
  } catch (error) {
    next(error);
  }
};

module.exports = LoginController;
