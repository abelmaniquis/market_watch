var mongoose = require('mongoose');
var config = require('./config.db')

module.exports = function(app) {
  require('mongoose').connect(config.db.url)
  mongoose.connection.once('open', function() {
    console.log('connection established!');
  });
  mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
  });
}