var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../api/user/user.model.js');

var Admin = new User
Admin.username = 'admin';


module.exports = function(){
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id,done){
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  
  //Local Signup
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
    function(req,username,password,done){
      User.findOne({
        'username':username
      },function(err,createdUser){
        if(err){
          return done(err,null);
        }else{
          done(null, createdUser);
        }
      })
    }
  ))
  
}