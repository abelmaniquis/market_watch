var User = require('./user.model.js');
var Portfolio = require('../portfolio/portfolio.model.js')
var userRouter = require('express').Router();
var controller = require('./user.controller.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {
  
  //USER SIGNUP
  app.get('/api/test',function(req,res){
    res.json({a:'test'});
  })
  
  app.get('/api/profile/userInfo', function(req, res) {
    res.json(new User);
  });
  
  app.post('/api/profile/userInfo',bodyParser,function(req,res){
    new User({username:req.body.username,password:req.body.password});
  });
  

  app.post('/api/users/signup', passport.authenticate('local-signup', {
    successRedirect: '/login/profile/',
    failureRedirect: '/'
  }), function(req, res) {
    req.status(200)
  });

  //LOGIN

  app.get('/api/users/login/', function(req, res) {
    res.status(200).json(User);
  });
  
  app.post('/api/users/login/', passport.authenticate('local-login', {
    successRedirect: '/login/profile/',
    failureRedirect: '/'
  }), function(req, res) {
    req.status(200);
  });
  
  app.put('/api/users/:user',isLoggedIn,function(req,res){
    User.findByIdAndUpdate(req.user._id,{
      portfolio:req.body.portfolio.push(req.params.stock)
    });
    console.log(req.body.portfolio)
  })
}


function isLoggedIn(req,res,next){
  if(req.isAuthenticated())
    return next();
  else{
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