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
    ref:'portfolio',
  }
})

module.exports = mongoose.model('User', userSchema);
