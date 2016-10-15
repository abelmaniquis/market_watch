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

app.use(session(
    {
    secret: 'mynameisabel', 
    resave: false, 
    saveUninitialized: false
    }
)); 

app.use(express.static(__dirname + '/../public'));

require('./middleware/appMiddleware.js')(app);
require('./config/config.passport.js')(app);
require('./api/user/user.routes.js')(app);


app.get('/',function(req,res){
    res.send("Hello?");
    console.log("Can you see this?")
})

//Handle errors
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

exports.app = app;

app.listen(port);

console.log("app listening on port " + port);