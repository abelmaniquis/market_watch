var User = require('./user.model.js');
var express = require('express');
var Portfolio = require('../portfolio/portfolio.model.js');
var userRouter = require('express').Router();
var controller = require('./user.controller.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {
  
  var UserModel = mongoose.model('User',User)
  
  //USER SIGNUP
  app.get('/api/test',function(req,res){
    console.log(User.schema.obj);
    res.json(User.schema);
  })
  
  app.post('/api/test',function(req,res){
    console.log(User.schema.obj);
    res.json(User.schema)
  })
  
  app.get('/api/allUsers',bodyParser,function(req,res){
    return UserModel.find(function(err,users){
      if(!err){
        return res.send(users)
      }else{
        return console.log(err);
      }
    });
  });
  
  app.post('/api/profile/userInfo',function(req,res){
    console.log(req.body);
  });
  
  app.get('/api/profile/userInfo/:id',function(req,res){
    return UserModel.findById(req.params.id,function(err,product){
      if(!err){
        return res.send(product);
      }else{
        console.log(err)
      }
    });
  });
  
  app.put('/api/profile/userInfo/:id',function(req,res){
    UserModel.findById(req.params.id,function(user){
      user.title = req.body.title;
      user.username = req.body.username;
      user.password = req.body.password;
      user.cash = req.body.cash;
      user.portfolio = req.body.portfolio;
      });
  });
  

  app.post('/api/users/signup', passport.authenticate('local-signup'),function(req, res) {
    console.log(req.user,req.body)
    res.end();
  });

  //LOGIN

  app.get('/api/users/login/', function(req, res) {
    res.status(200).json(User);
  });
  
  app.post('/api/users/login/', passport.authenticate('local-login'), function(req, res){
    console.log(req.user,req.body);
    res.end();
  });
  
  app.put('/api/users/:user',function(req,res){
    User.findByIdAndUpdate(req.user._id,{
      portfolio:req.body.portfolio.push(req.params.stock)
    });
    console.log(req.body.portfolio)
  })
  
}
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("USER IS LOGGED IN");
    return next();
  }
  else {
    res.redirect('/');
  }
}

/*
creating a user:

  var someUser = User.create({
    username:req.params.username
  })
  var aUser = new User
  var aStock = req.params.stock;
  aUser.username = req.params.username;
  aUser.password = req.params.password;
  aUser.cash = 1000000;
  
  addToWatchList(aUser,{name:'GOOG',quant:30,val:200});
  addToWatchList(aUser,req.params.stock);
  aUser.cash -= aUser.portfolio[0].val*aUser.portfolio[0].quant;
  res.json(aUser);
*/