var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var http = require('http');
var path = require('path');
var React = require('react');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var users = [
{
  login:{
    id: 0,
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

var id = 1;

var updateUsers = function(req,res,next){
  if(!req.body.login.id){
    id++;
    req.body.login.id = id + ''
  }
  next();
};

app.get('/',function(req,res){
    res.status(202).sendFile(__dirname + '/../public/index.html',function(err){
        if(err){
            res.status(500).send(err)
        }
    })
});


app.get('/users',function(req,res,err){
   res.status(202).json(users);
   if(err){
     res.status(500).send(err)
   }
});

app.get('/users/:id',function(req,res){
  var user = req.user;
  res.json(user||{});
});

app.post('/users/:id',function(req,res){
  var user = req.body;
  users.push
});

app.put('/users/:id',function(req,res){
  
});

app.delete('/users/:id',function(req,res){
  
});

app.listen(port);
console.log("app listening on port " + port);