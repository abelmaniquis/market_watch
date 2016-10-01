var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../api/user/user.model.js');

module.exports = function(){
  passport.serializeUser(function(user,done){
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err,user){
      done(err,user);
    });
  });
  
};