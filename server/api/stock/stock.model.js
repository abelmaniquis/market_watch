var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var StockSchema = mongoose.Schema({
  name: String,
  price:0,
  quant: 0
});

module.exports = mongoose.model('stock',StockSchema); 