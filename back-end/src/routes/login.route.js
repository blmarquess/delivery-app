const { Router } = require('express');
const loginController = require('../controllers/login.controller');

const loginRouter = Router();

loginRouter.route('/')
  .post(loginController);

export default loginRouter;
