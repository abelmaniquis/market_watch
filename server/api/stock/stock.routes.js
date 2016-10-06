var http = require('http');
var path = require('path');
var express = require('express');

module.exports = function(app){
  
  app.get("/stocks",function(req,res){
    console.log(app);
    res.status(200).send("This is a test of stock.routes");
  });
  
  app.get("/stocks/:id",function(req,res){
    var stock = req.params.id;
    res.status(200).send("Will show an individual this individual stock: " + stock)
  });
  
}