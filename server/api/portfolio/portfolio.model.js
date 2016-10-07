var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var StockSchema = mongoose.Schema({
  folder: {
    type:Array
  },
  stock:{
    name:{
      type:String,
    },
    quant:{
      type:Number
    },
  },
  value: Number
});

module.exports = mongoose.model('stock',StockSchema); 