var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var api = require('./api/api')
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
var morgan = require('morgan');
var http = require('http');
var path = require('path');

var config = require('./config/config')

require('mongoose').connect(config.db.url)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.use('/api', api);

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

exports.app = app;

app.listen(port);

console.log("app listening on port " + port);