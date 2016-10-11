var User = require('./user.model.js');
var userRouter = require('express').Router();
var controller = require('./user.controller.js');

userRouter.route('/users')
  .get(controller.get)
  .post(controller.post)

userRouter.route('/users/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = userRouter;
