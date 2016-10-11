//var http = require('http');
//var path = require('path');
//var bodyParser = require('body-parser');
//var express = require('express');
//var app = express();
//var lodash = require('lodash');
//var path = require('path');
//var http = require('http');

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
/*
userRouter.get('/',function(req,res){
  //res.sendFile(path.join(__dirname, '../../../public'));
})
*/
/*
userRouter.get('/users',function(req,res){
  var user = new User;
  
  res.json(user);
});


userRouter.get('/users/:id',function(req,res){
  var user = req.user;
  res.json(user||{});
})

userRouter.post('/users/',updateUser,function(req,res){
  res.status(202).send("okay!");
});

userRouter.put('/users/:id',function(req,res){
  var update = req.params.id;
  res.send(update);
});

userRouter.delete('/users/:id',function(req,res){
  var user = lodash.findIndex(users, {id: req.params.id});
  users.splice(users, 1);
  res.json(req.lion);
});
*/
