var Portfolio = require('./portfolio.model.js');
var _ = require('lodash');

exports.params = function(req,res,next,id){
  Portfolio.findById(id)
  .then(function(portfolio){
    if(!portfolio){
      next(new Error('No portfolio exists with that id'));
    }else{
      req.portfolio = portfolio;
      next();
    }
  });
}

exports.get = function(req,res,next){
 Portfolio.find({})
 .then(function(users){
   res.json(users);
 },function(err){
   next(err);
 });
}

exports.getOne = function(req,res,next){
  var portfolio = req.portfolio
  res.json(portfolio);
}

exports.put = function(req,res,next){
  var portfolio = req.portfolio;
  var update = req.body;
  _.merge(portfolio,update);
  
  portfolio.save(function(err,saved){
    if(err){
      next(err);
    }else{
      res.json(saved);
    }
  })
  
}

exports.post = function(req,res,next){
  var newPortfolio = req.body;
  
  Portfolio.create(newPortfolio)
  .then(function(portfolio){
    res.json(portfolio);
  },function(err){
    next(err);
  })
}

exports.delete = function(req,res,next){
  req.portfolio.remove(function(err,removed){
    if(err){
      next(err);
    }else{
      res.json(removed);
    }
  });
}