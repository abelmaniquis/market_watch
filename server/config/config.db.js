module.exports = {
  logging:true,
  seed:true,
  db:
  {
   url:process.env.MONGOBD_URI
  }
}

/*development 
url:'mongodb://localhost/marketUsers'*/

/*
deployment:
url:process.env.MONGODB_URI
*/