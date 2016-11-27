var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var StockSchema = mongoose.Schema({
  folder: {
    type:Array
  },
  totalValue:{
    type:Number //Add together all of the values of stocks in the folder
  },
  stock:{
    name:{
      type:String
    },
    price:{
      type:Number //will be the current price of the stock, will need a web socket or connection.
    },
    quant:{
      type:Number
    },
    value:{
      type:Number //(stock.quant*stock.price)
    }
  },
 owner: {type: mongoose.Schema.Types.ObjectId,ref:'username'}
});

module.exports = mongoose.model('stock',StockSchema); 