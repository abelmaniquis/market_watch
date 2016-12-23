var express = require('express');
var path = require('path');
var http = require('http');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
var config = require('./config/config.db')
var mongoose = require('mongoose');
var User = require('./api/user/user.model.js')

require('./config/config.mongoose.js')(app);

app.use(express.static(__dirname + '/../public'));

require('./middleware/appMiddleware.js')(app);
require('./api/user/user.routes.js')(app);

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../', 'public', 'index.html'))
});

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send({err:"Something happened!"});
  }
});

exports.app = app;

app.listen(port);

console.log("app listening on port " + port);