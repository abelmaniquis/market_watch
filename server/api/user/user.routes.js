var User = require('./user.model.js');
var Portfolio = require('../portfolio/portfolio.model.js')
var userRouter = require('express').Router();
var controller = require('./user.controller.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

mongoose.connection.once('open', function() {
    console.log('connection established!');
});

module.exports = function(app){

var Users = mongoose.model('User',User);

var create = function(user,callback){
  User.create(user,function(err,result){
    if(err){
      console.error("No user");
    }
  }); 
}

var read = function(filter,callback){
}

var addToWatchList = function(user,stock){
  user.portfolio.push(stock);
  console.log(user.schema);
}

//USER SIGNUP

app.get('/api/signup/:username',function(req,res){
  res.json(User);
});

app.post('/api/signup',passport.authenticate('local-signup',{
    successRedirect : '/profile/abel', 
    failureRedirect: '/' 
  }),function(req,res){
    console.log(req.body);
});

//LOGIN

app.get('/api/login/:username',function(req,res){
  console.log(req.params);
});
/*
app.post('/login',function(req,res){
  res.send("this should redirect to the user's profile");
})
*/
app.post('/login', passport.authenticate('local-login',{
    successRedirect : '/login/profile',
    failureRedirect : '/'
  }), function(req, res){
  req.status(200);
});

app.post('/')


app.get("*", function(req, res) {
  res.sendFile(__dirname + '/../public/index.html');
});

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