var User = require('./user.model.js');
var Portfolio = require('../portfolio/portfolio.model.js')
var userRouter = require('express').Router();
var controller = require('./user.controller.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connection.once('open', function() {
    console.log('connection established!');
});

module.exports = function(app){

var create = function(user,callback){
  User.create(user,function(err,result){
    if(err){
      console.error("No user");
    }
  }); 
}

app.get('/login',function(req,res){
  res.status(202).json({});
});

app.get('/signup',function(req,res){
  console.log('Reading the routes on node.js')
  res.status(202).send('GOT SIGNUP');
});

app.get('/users/:username/:password/',function(req,res){
  User.create()
  var aUser = new User
  aUser.username = req.params.username;
  aUser.password = req.params.password;
  aUser.cash = 1000000;
  aUser.portfolio = new Portfolio;
  res.json(aUser);
});

app.post('/users/:username/:password', bodyParser, function(req, res) {
})


}