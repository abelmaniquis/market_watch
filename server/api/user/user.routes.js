var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var lodash = require('lodash');
var User = require('./user.model.js');
var userRouter = require('express').Router();

var path = require('path');
var http = require('http');

var users = []
var id = 0;

  //app.use(express.static(__dirname + '/public'));


var updateUser = function(req,res,next){
  var newUser = new User
  next()
}


userRouter.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../../../public'));
})


userRouter.param('id',function(req,res,next,id){
  var user = lodash.find(users,{id:id});
  if(user){
    req.user = user;
    next();
  }else{
    res.send();
  }
});


userRouter.get('/users',function(req,res){
  var aUser = new User
  aUser.username = "generic user";
  aUser.password = "secret";
  aUser.cash = 1000000;
  users.push(aUser);
  res.json(users);
});

userRouter.get('/users/:id',function(req,res){
  var user = req.user;
  res.json(user||{});
})

userRouter.post('/users/',updateUser,function(req,res){
  var user = req.body;
  users.push(user);
  res.status(202).json(user);
});

userRouter.put('/users/:id',function(req,res){
  var update = req.body;
});

userRouter.delete('/users/:id',function(req,res){
  var user = lodash.findIndex(users, {id: req.params.id});
  users.splice(users, 1);
  res.json(req.lion);
});


module.exports = userRouter;