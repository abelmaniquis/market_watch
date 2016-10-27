var express =require('express');
var path = require('path');
var http = require('http');
var session = require('express-session');
var app = express();

var {match,RouterContext} = 'react-router';


var port = process.env.PORT || 8080;
var server = require('http').createServer(app);

var config = require('./config/config.db')
var mongoose = require('mongoose');
var User = require('./api/user/user.model.js')

require('mongoose').connect(config.db.url)
mongoose.connection.once('open', function() {
    console.log('connection established!');
});
mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

app.use(express.static(__dirname + '/../public'));

require('./middleware/appMiddleware.js')(app);
require('./api/user/user.routes.js')(app);

//Handle errors
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname,'/../','public', 'index.html'))
 console.log("YOU ARE NOW IN THE '*' ENDPOINT");
});

exports.app = app;

app.listen(port);

console.log("app listening on port " + port);