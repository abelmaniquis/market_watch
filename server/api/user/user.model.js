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
    type:Number
  },
  portfolio:{
    type:Array
  }
})

//now you can say User.get on any point on the controller. 
//.methods works on instances
//.statics works on models
//http://mongoosejs.com/docs/guide.html

//When called on controller, call User.get

var Users = mongoose.model('User',userSchema); 

userSchema.statics.test = function(){
  console.log("Testing, testing 1 2 3");
}

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

var Users = mongoose.model('User',userSchema);

module.exports = mongoose.model('User', userSchema);
