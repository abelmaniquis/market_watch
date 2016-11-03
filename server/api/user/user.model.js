var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
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


require('./user.validation.js')(userSchema);

userSchema.statics.findByName = function(name,cb){
  return this.find({username: new RegExp(name,'i')},cb);
};

userSchema.statics.addStock = function(stock){
  this.portfolio.push(stock);
}

userSchema.methods.validPassword = function(password) {
  var salt = bcrypt.genSaltSync(8);
  var hash = bcrypt.hashSync(password, salt);

  if (bcrypt.compareSync(this.password, hash)) {
    return true;
  };
};


module.exports = mongoose.model('User', userSchema);
