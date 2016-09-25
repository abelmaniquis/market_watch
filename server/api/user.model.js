var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  login:{
    username: String,
    password: String
  },
  watchList:{
    stocks: Array
  }
  
})

module.exports = mongoose.model('User', userSchema);