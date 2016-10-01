var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  login:{
    username: String,
    password: String
  },
  watchList:{
    stocks: Array
  }
  
})

userSchema.methods.validPassword = function(password) {
  var salt = bcrypt.genSaltSync(8);
  var hash = bcrypt.hashSync(password, salt);

  if (bcrypt.compareSync(this.local.password, hash)) {
    return true;
  };
};


module.exports = mongoose.model('User', userSchema);