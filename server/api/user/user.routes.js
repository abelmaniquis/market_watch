var User = require('./user.model.js');
var Portfolio = require('../portfolio/portfolio.model.js')
var userRouter = require('express').Router();
var controller = require('./user.controller.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

mongoose.connection.once('open', function() {
    console.log('connection established!');
});

module.exports = function(app){

var testUser = mongoose.model('User',User);

var create = function(user,callback){
  User.create(user,function(err,result){
    if(err){
      console.error("No user");
    }
  }); 
}

var addToWatchList = function(user,stock){
  user.portfolio.push(stock);
  console.log(user);
}

app.get('/login',function(req,res){
  res.status(202).json({});
});

app.get('/signup',function(req,res){
  console.log('Reading the routes on node.js')
  res.status(202).send('GOT SIGNUP');
});

app.get('/login/:username/:password/:stock',function(req,res){
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
});
/*
app.post('/users/:username/:password/:stock', bodyParser, function(req, res) {
  console.log(testUser);
})
*/
app.get('/users/:portfolio/:stock')

}
