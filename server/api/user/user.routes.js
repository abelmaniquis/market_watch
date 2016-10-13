var User = require('./user.model.js');
var userRouter = require('express').Router();
var controller = require('./user.controller.js');

console.log("API HAS ACCESS TO USER ROUTES")

var aUser = new User

aUser.username = "a New User";
aUser.password = "a secret password";
aUser.cash = 1000000;

module.exports = function(app){
app.get('/login',function(req,res){
  res.status(202).json(aUser);
});

app.get('/signup',function(req,res){
  console.log('Reading the routes on node.js')
  res.status(202).send('GOT SIGNUP');
});
}