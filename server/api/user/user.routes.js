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
  
  console.log("In user routes");
  
  console.log("Should this be a schema or a POJO? ");
  console.log("");
  var UserModel = mongoose.model('User',User)
  
  app.post('/api/users/signup', passport.authenticate('local-signup'),function(req, res, next) {
    console.log(req.user,req.body)
      res.end();
  });

  //LOGIN

  app.get('/api/users/login/', function(req, res, next) {
      res.status(200).json(User);
  });
  
  app.post('/api/users/login/', passport.authenticate('local-login'), function(req,res,next){
    res.end();
  });
  
  //USER INFO
  
  app.get('/api/profile/myInfo',isLoggedIn,function(req, res, next){
      res.status(200).json(req.user)
  })
  
  app.put('/api/profile/myInfo/:aStock',isLoggedIn,function(req, res, next){
    UserModel.findByIdAndUpdate(req.user._id,{
      
    },function(err,user){
      if(err){
        next(err);
      }else{
        console.log("Put request goes through");
        user.portfolio.push(req.params.aStock);
        user.save();
      }
    })
    console.log(req.user);
    console.log(" ")
  })
  
  app.put('/api/profile/myInfo/sell/:aStock', isLoggedIn, function(req, res, next) {
    UserModel.findByIdAndUpdate(req.user._id, {
        $pull: {
          portfolio: req.params.aStock
        }
      },
      function(error, user) {
        if (error) {
          next(error);
        }
        else {
          res.status(201).json(user);
        }

      });
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
