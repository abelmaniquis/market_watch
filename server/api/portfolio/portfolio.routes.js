var http = require('http');
var path = require('path');
var router = require('express').Router();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var axios = require('axios');
var Portfolio = require('./portfolio.model.js');
var portfolioRouter = require('express').Router();

var blueChip = new Portfolio
blueChip.folder.push('GOOG');
blueChip.folder.push('AMZN');
blueChip.folder.push('FB');
console.log(blueChip);

portfolioRouter.get('/portfolio',function(req,res){
  res.json(blueChip);
});

portfolioRouter.get('/portfolio/:stock',function(req,res){
  var someStock = req.params.stock
  axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${someStock}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
});

module.exports = portfolioRouter;