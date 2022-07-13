const { Router } = require('express');
const jwt = require('jwt');
const loginController = require('../controllers/login.controller');

const validateRouter = Router();

validateRouter.route('/')
  .post((req, res) => {
    const { authorization } = req.headers;

    try {
      const token = jwt.verify(authorization);
      console.log(token);
      return res.json({ role: token.role });
    } catch (error) {
      return res.status(401).json({ message: 'User unauthorized' });
    }
  });

module.exports = validateRouter;
