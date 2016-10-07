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
  portfolio:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'portfolio',
    required:true
  }
})

//require('./user.validation.js')(userSchema);


userSchema.methods.validPassword = function(password) {
  var salt = bcrypt.genSaltSync(8);
  var hash = bcrypt.hashSync(password, salt);
  if (bcrypt.compareSync(this.password, hash)) {
    return true;
  };
};

console.log(userSchema.validPassword("secret"))

module.exports = mongoose.model('User', userSchema);