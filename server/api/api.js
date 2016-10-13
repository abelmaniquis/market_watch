/*var router = require('express').Router();

router.use('/users',require('./user/user.routes'))
router.use('/portfolio',require('./portfolio/portfolio.routes'))

console.log("Connects to API.JS");

module.exports = router;*/
module.exports = function(app){
app.get('/login',function(req,res){
  res.status(202).send("GOT LOGIN");
});

app.get('/signup',function(req,res){
  res.status(202).send('GOT SIGNUP');
});
}