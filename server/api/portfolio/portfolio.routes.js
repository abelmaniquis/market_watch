var http = require('http');
var path = require('path');
var router = require('express').Router();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Portfolio = require('./portfolio.model.js');

module.exports = function(app){
  
  var testFolio = new Portfolio;
  
  console.log(testFolio);
  
  
  app.get("/users/:id/portfolio",function(req,res){
    res.status(200).json(testFolio);
  });
  
}
