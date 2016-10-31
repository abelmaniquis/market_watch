var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../api/user/user.model.js');

module.exports = function(app) {

  //Local Signup
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
            User.create({
              'username': username,
              'password': password,
              'cash': 1000000
            }, function(err, createdUser) {
              if (err) {
                done(err, null)
              }
              else {
                console.log(createdUser.username + " has been added to the user database!");
                return done(null, createdUser);
              }
            });
          }
        })
    }));

  //Local Login
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
          return done(null, false, { message: 'Incorrect username or password' });
        }
        else if (!user.validPassword(password)) {
          console.log("Not valid password");
          return done(null, false)
        }
        else if (user.validPassword(password)) {
          console.log("Success! ", user);
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