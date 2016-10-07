var User = require('user.model.js');
var _ = require('lodash');

exports.get = function(req,res,next){
  User.find({})
    .then(function(users){
      res.json(users);
    },function(err){
      next(err);
    });
    
};
