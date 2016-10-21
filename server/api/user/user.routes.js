var User = require('./user.model.js');
var Portfolio = require('../portfolio/portfolio.model.js')
var userRouter = require('express').Router();
var controller = require('./user.controller.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

  console.log('READING USER ROUTES')
  
  var addStock = function(user,stock){
    user.portfolio.push(stock);
    user.save
  }
  
  var someUser = new User;
  
  addStock(someUser,'GOOG');
  
  console.log(someUser);
  
  //USER SIGNUP

  app.get('/api/signup/:username', function(req, res) {
    res.json(User);
  });

  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile/abel',
    failureRedirect: '/'
  }), function(req, res) {
    console.log(req.body);
  });

  //LOGIN

  app.get('/api/login/:username', function(req, res) {
    console.log(req.params);
  });
  
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/login/profile',
    failureRedirect: '/'
  }), function(req, res) {
    req.status(200);
  });
  
  app.put('/api/:username/:stock',isLoggedIn,function(req,res){
    User.findByIdAndUpdate(req.user._id,{
      'portfolio':req.body.portfolio.push(req.params.stock)
    });
  })

  app.get("*", function(req, res) {
    res.sendFile(__dirname + '/../public/index.html');
  });

}


function isLoggedIn(req,res,next){
  if(req.isAuthenticated())
    return next();
  else{
    res.redirect('/failure');
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