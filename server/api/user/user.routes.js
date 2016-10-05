var http = require('http');
var path = require('path');

var router = require('express').Router();

router.route('/')
  .get(function(req,res){
    res.send({ok:true})
  });