//global middleware
var session = require('express-sessions');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false,
    }));
    app.use(session({
        secret: process.env.passPort||'generateRandomHash',
        resave: 'false',
        saveUninitialized: 'false',
        name: 'stocks_session',
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    require('../config/config.passport.js')(app);

};
