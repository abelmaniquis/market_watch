module.exports = {
  logging:true,
  seed:true,
  db:
  {
    url:'mongodb://localhost/marketUsers'
  }
}

/*development 
url:'mongodb://localhost/marketUsers'*/

/*
deployment:
url:process.env.MONGODB_URI
*/