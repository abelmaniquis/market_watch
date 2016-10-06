var http = require('http');
var path = require('path');
var router = require('express').Router();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var User = require('./user.model.js');

module.exports = function(app){
  /*TEST USER-----------------------------------------------------*/
  var testUser = new User;
  
  testUser.username = "admin";
  testUser.password = "secret";
  testUser.cash = 1000000;
  
  console.log(testUser.portfolio);
  /*-----------------------------------------------------------------*/
  
  app.use(express.static(__dirname + '/public'));
  
  app.set('public', path.join(__dirname, '../../../public'))
  var publicPath = app.get('public');
  
  console.log(publicPath);
  
  app.get('/',function(req,res){
    res.status(202).sendFile(path.join(publicPath,'index.html'));
  });
  
  app.get('/users',function(req,res){
    res.status(202).json(testUser);
  });
  
  app.get('/users/:id',function(req,res){
    testUser.username = req.body.id;
    console.log(testUser.username);
    res.status(202).json(testUser.username);
  });
  
  
}