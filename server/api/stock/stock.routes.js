var http = require('http');
var path = require('path');
var express = require('express');

module.exports = function(app){
  
  app.get("/stocks",function(req,res){
    res.status(200).send("This is a test of stock.routes");
  });
  
}