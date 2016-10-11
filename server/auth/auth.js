var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var config = require('../config/config');
var checkToken = expressJwt({secret:config.secrets.jwt});
var User = require('../api/user/userModel');

exports.decodeToken = function(){
  return function(req,res,next){
    if (req.query && req.query.hasOwnProperty('access_token')){
      req.headers.authorization = 'Bearer' + req.query.access_token;
    }
    checkToken(req,res,next)
  };
};

exports.getNewUser = function(){
  return function(req,res,next){
    User.findById(req.user._id)
    .find(function(user){
      if(!user){
        res.send(401).send('Unauthorized Entrty');
      }else{
        req.user = user;
        next();
      }
    },function(err){
      next(err);
    });
  }
};

exports.verifyUser = function(){
  return function(req,res,next){
    var username = req.body.username;
    var password = req.body.bassword
    
    if(!username||!password){
      res.status(400).send('No username or password');
      return;
    }
    
    User.findOne({username:username})
      .then(function(user){
        
      })
    
    //Check for username in DB and check if the passwords match for the username
    
    
  };
};


