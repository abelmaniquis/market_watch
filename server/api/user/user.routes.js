var User = require('./user.model.js');
var userRouter = require('express').Router();
var controller = require('./user.controller.js');

//console.log(controller);
//console.log(userRouter.route('/users/:id').get(controller.getOne));
/*
testing POST
http://stackoverflow.com/questions/29364862/how-to-send-post-request-to-the-below-post-method-using-postman-rest-client
https://www.getpostman.com/docs/text_editor

*/
console.log("API HAS ACCESS TO USER ROUTES")

userRouter.route('/test')
.get(controller.test)

userRouter.route('/users')
  .get(controller.get)
  .post(controller.post)
  
userRouter.route('/users/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = userRouter;
