var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var http = require('http');
var path = require('path');

var userapi = require('./api/user/user.routes.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

userapi(app);

app.listen(port);
console.log("app listening on port " + port);