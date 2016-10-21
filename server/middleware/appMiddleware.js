//global middleware
var session = require('express-sessions');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');


module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  app.use(session(
    {
    secret: 'mynameisabel', 
    resave: false, 
    saveUninitialized: false
    }
)); 
  
};