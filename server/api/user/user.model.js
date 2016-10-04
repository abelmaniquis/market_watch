var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  login:{
    username: String,
    password: String,
    required:true
  },
  cash: 100000,
  portfolio:[{type: Schema.Types.ObjectId, ref:'stock'}]
})

userSchema.methods.addStock = function(){
  
}

require('./user.validation.js')(userSchema);


userSchema.methods.validPassword = function(password) {
  var salt = bcrypt.genSaltSync(8);
  var hash = bcrypt.hashSync(password, salt);

  if (bcrypt.compareSync(this.local.password, hash)) {
    return true;
  };
};


module.exports = mongoose.model('User', userSchema);