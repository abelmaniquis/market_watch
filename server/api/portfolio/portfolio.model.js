var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var StockSchema = mongoose.Schema({
  stocks: Array,
  value: Number
});

module.exports = mongoose.model('stock',StockSchema); 