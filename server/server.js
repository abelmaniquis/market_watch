var express = require('express');
var app = express();
var api = require('./api/api')
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
var http = require('http');
var path = require('path');
var config = require('./config/config.db')

require('mongoose').connect(config.db.url)
require('./middleware/appMiddleware.js');

//Serve static files
app.use(express.static(__dirname + '/../public'));

//app.use('/api', api);

//require('./api/user/user.routes.js');

app.get('/login',function(req,res){
  res.status(202).send("GOT LOGIN");
});

app.get('/signup',function(req,res){
  res.status(202).send('GOT SIGNUP');
});


//Handle errors
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

exports.app = app;

app.listen(port);

console.log("app listening on port " + port);