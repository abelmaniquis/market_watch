exports.decodeToken = function(){
  return function(req,res,next){
    if (req.query && req.query.hasOwnProperty('access_token')){
      req.headers.authorization = 'Bearer' + req.query.access_token;
    }
    checkToken(req,res,next)
  };
};

exports.getNewUser = function(){
  return function(req,res,next){
    User.findById(req.user._id)
    .find(function(user){
      if(!user){
        res.send(401).send('Unauthorized Entrty');
      }else{
        req.user = user;
        next();
      }
    },function(err){
      next(err);
    });
  }
};

exports.verifyUser = function(){
  return function(req,res,next){
    var username = req.body.username;
    var password = req.body.bassword
    
    if(!username||!password){
      res.status(400).send('No username or password');
      return;
    }
    
    User.findOne({username:username})
      .then(function(user){
        if(!user){
          res.status(401).send('No user with a given username');
        }else{
          //Check password
          if(!user.authenticate(password)){
            res.status(401).send('Wrong Password');
          }else{
            req.user = user;
            next();
          }
        }
      },function(err){
        next(err);
      })
  };
};

exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt,
    {expiresInMinutes: config.expireTime}
  );
};
