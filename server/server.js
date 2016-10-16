var express = require('express');
var app = express();
var session = require('express-session'); 
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
var http = require('http');
var path = require('path');
var config = require('./config/config.db')
var mongoose = require('mongoose');
var User = require('./api/user/user.model.js')

require('mongoose').connect(config.db.url)

function requestHandler(request, response) {
    response.sendFile(__dirname + '/../public/index.html');
}

app.use(express.static(__dirname + '/../public'));

require('./middleware/appMiddleware.js')(app);
require('./config/config.passport.js')(app);
require('./api/user/user.routes.js')(app);

//Handle errors
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

app.get('*', requestHandler);

exports.app = app;

app.listen(port);

console.log("app listening on port " + port);