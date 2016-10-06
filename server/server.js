var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);
var morgan = require('morgan');
var http = require('http');
var path = require('path');

var userRoute = require('./api/user/user.routes.js');
var portfolioRoute = require('./api/portfolio/portfolio.routes.js');

exports.app = app;
exports.server = server;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

userRoute(app);
portfolioRoute(app);


app.listen(port);

console.log("app listening on port " + port);