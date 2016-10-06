var http = require('http');
var path = require('path');
var router = require('express').Router();
var bodyParser = require('body-parser');
var express = require('express');
var User = require('./user.model.js');

module.exports = function(app){
  
  app.use(express.static(__dirname + '/public'));
  
  app.set('public', path.join(__dirname, '../../../public'))
  var publicPath = app.get('public');
  
  app.get('/',function(req,res){
    res.status(200).sendFile(path.join(publicPath,'index.html'));
  });
  
  app.get('/users',function(req,res){
    res.status(202).send('accessing users');
  });
  
  app.get('/users/:id',function(req,res){
    var user = req.params.id
    res.status(202).send("This is the information for user:" + user);
  })
  
}