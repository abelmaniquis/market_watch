//http://blog.yld.io/2015/06/10/getting-started-with-react-and-node-js/#.V-mzVTMrLnA

var express = require('express');
var React = require('react');
var app = express();

console.log(__dirname);

app.use(express.static('public'));


app.get('/',function(req,res){
    res.status(202).sendFile(__dirname + '/../index.html',function(err){
        if(err){
            res.status(500).send(err)
        }
    })
});

app.listen(8080);
console.log("app listening on port 8080");