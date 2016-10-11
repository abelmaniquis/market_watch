var User = require('./user.model.js');
var userRouter = require('express').Router();
var controller = require('./user.controller.js');

console.log(controller);
console.log(userRouter.route('/users/:id').get(controller.getOne));

userRouter.route('/')
  .get(controller.get)
  .post(controller.post)

userRouter.route('/users/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = userRouter;
