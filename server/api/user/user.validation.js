module.exports = function(userSchema){
  userSchema.path('local.username').validate(function(name){
  return name.length >= 4;
},'Username must contain at least 4 characters.');

userSchema.path('local.password').validate(function(password){
  return password.length >= 4;
},'Password must contain at least 4 characters');

userSchema.path('local.name').validate(function(name){
  return name.length >=3
},'Name must have a length greater than or equal to 3');

}