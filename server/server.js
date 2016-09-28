var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var React = require('react');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.status(202).sendFile(__dirname + '/../public/index.html',function(err){
        if(err){
            res.status(500).send(err)
        }
    })
});

var testUsers = [
    
{
  login:{
    username: 'Abel',
    password: 12345
  },
  info:{
    firstName: 'Abel',
    lastName: 'Maniquis',
    emailAdress: 'abelmaniquis@gmail.com'
  },
  watchlist:{
    stocks: ['GOOG','NFLX','TSLA','AMZN','BRK_B']
  }
}
    
];

app.get('/users',function(req,res){
   res.json(testUsers); 
});

app.get('/users/:id',function(req,res){
});

app.listen(8080);
console.log("app listening on port 8080");