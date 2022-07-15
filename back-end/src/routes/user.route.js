const { Router } = require('express');
const loginController = require('../controllers/login.controller');

const userRouter = Router();

userRouter.route('/')
  .get(loginController.list)
  .post(loginController.create);

userRouter.route('/:id')
  .get(loginController.show)
  .put(loginController.update)
  .delete(loginController.remove);

export default userRouter;
