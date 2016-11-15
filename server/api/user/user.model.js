//http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

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

userSchema.methods.validPassword = function(password) {
  var salt = bcrypt.genSaltSync(8);
  var hash = bcrypt.hashSync(password, salt);
  if (bcrypt.compareSync(this.password, hash)) {
    return true;
  };
};

module.exports = mongoose.model('User', userSchema);