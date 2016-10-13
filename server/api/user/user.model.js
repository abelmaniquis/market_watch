var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var Portfolio = require('../portfolio/portfolio.model.js');

var userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  cash:{
    type:Number,
    required:true
  },
  portfolio:{
    type: mongoose.Schema.Types.ObjectId,   //Here is a relationship, a user has a portfolio
    ref:'portfolio'
  }
})

//now you can say User.get on any point on the controller. 
//.methods works on instances
//.statics works on models
//http://mongoosejs.com/docs/guide.html

//When called on controller, call User.get

var Users = mongoose.model('User',userSchema); 

console.log(Users);

userSchema.statics.create = function(req,res,next){
  this.find({})
  .populate('portfolio')
  .exec()
  .then(function(user){
    res.json(user);
  },function(err){
    next(err);
  });
};


userSchema.statics.getOne = function(req,res,next){
  var user = req.user
  res.json(user);
};

userSchema.statics.put = function(req,res,next){
  console.log("this is the put function")
};

userSchema.statics.post = function(req,res,next){
  console.log("This is the post function")
};

userSchema.statics.delete = function(req,res,next){
  console.log("This is the delete function")
};


module.exports = mongoose.model('User', userSchema);
