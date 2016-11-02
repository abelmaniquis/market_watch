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
  
  app.post('/api/profile/userInfo',function(req,res){
    console.log(req.body);
    return req.body
  });
  
  app.put('/api/profile/userInfo/',function(req,res){
    UserModel.findById(req.params.id,function(user,err){
      if(!err){
      console.log(req.body)
      }else{
        console.log(err);
      }
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
    console.log(req.body);
    console.log("Got a PUT request");
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
