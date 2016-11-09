//http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var aSalt = 10;

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


require('./user.validation.js')(userSchema);

userSchema.pre('save',function(next){
  var user = this;
  
  if(!user.isModified('password')){
    return next();
  }
  
  bcrypt.genSalt(aSalt,function(err,hash){
    if(err){
      return next(err)
    }
    user.password = hash;
    console.log(user.password);
    next();
  })
  
})

userSchema.methods.validPassword = function(password) {
  console.log(this.password);
  var salt = bcrypt.genSaltSync(8);
  console.log(salt);
  var hash = bcrypt.hashSync(password, salt);
  if (bcrypt.compareSync(this.password, hash)) {
    return true;
  };
};


module.exports = mongoose.model('User', userSchema);