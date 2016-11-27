var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../api/user/user.model.js');
var bcrypt = require('bcrypt');
module.exports = function(app) {

  //Signup
  passport.use('local-signup', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, username, password, done) {
      User.findOne({
          'username': username
        },
        function(err, user) {
          if (err) {
            return done(err);
          }
          else if (user) {
            console.log('This username already exists');
          }
          else {
            
            var newUser = new User();
            
            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            
            newUser.save(function(err){
              if (err){
                throw err
              }
              return done(null,newUser);
            })
            
          }
        })
    }));

  // Login
  passport.use('local-login', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqtoCallback: true
    },
    function(username, password, done) {
      User.findOne({
        'username': username,
      }, function(err, user) {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (!user) {
          console.log('There is no user!');
          return done(null, false, {
            message: 'Incorrect username or password'
          });
        }
        else if (!user.validPassword(password)) {
          console.log("Not valid password");
          return done(null, false)
        }else if (user.validPassword(password)){
          return done(null, user)
        };
      });

    }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

}