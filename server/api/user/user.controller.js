
var User = require('./user.model.js');
var _ = require('lodash');

/*
Controller functions
require these functions into user.routes.js
*/

//Grab User id, grab user document with that id.

console.log("USER ROUTES HAVE ACCESS TO USER CONTROLLER");

//These should be
exports.params = function(req,res,next,id){
  User.findById(id)
  .then(function(user){
    if(!user){
      next(new Error('No users with that id'));
    }else{
      req.user = user;
      next();
    }
  },function(err){
    next(err);
  })
};

exports.get = function(req,res,next){
  User.create
};

exports.getOne = function(req,res,next){
  User.getOne
};

exports.put = function(req,res,next){
  var user = req.user;
  var update = req.body;
  _.merge(user,update);
  
  user.save(function(err,saved){
    if(err){
      next(err);
    }else{
      res.json(saved);
    }
  });
};

exports.post = function(req,res,next){
  var newUser = req.body;
  
  User.create(newUser)
  .then(function(user){
      res.json(user);
  },function(err){
    next(err);
  });
};

exports.delete = function(req,res,next){
  req.user.remove(function(err, removed){
    if(err){
      next(err);
    }else{
      res.json(removed);
    }
  })
};

