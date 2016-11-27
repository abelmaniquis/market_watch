module.exports = {
  logging:true,
  seed:true,
  db:
  {
    url:process.env.MONGOLAB_URI
  }
}

/*development 
url:'mongodb://localhost/marketUsers'*/