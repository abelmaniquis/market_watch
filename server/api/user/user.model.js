var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

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
  cash: {
    type: Number
  },
  portfolio:[]
})

//require('./user.validation.js')(userSchema);

/*
userSchema.methods.validPassword = function(password) {
  var salt = bcrypt.genSaltSync(8);
  var hash = bcrypt.hashSync(password, salt);

  if (bcrypt.compareSync(this.local.password, hash)) {
    return true;
  };
};
*/

module.exports = mongoose.model('User', userSchema);