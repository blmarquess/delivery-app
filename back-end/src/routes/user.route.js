const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.route('/')
  .get(userController.list)
  .post(userController.create);

userRouter.route('/:id')
  .get(userController.show)
  .put(userController.update)
  .delete(userController.remove);

export default userRouter;
