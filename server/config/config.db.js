module.exports = {
  logging:true,
  seed:true,
  db:
  {
    url:process.env.MONGODB_URI
  }
}

/*development 
url:'mongodb://localhost/marketUsers'*/