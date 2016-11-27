module.exports = {
  logging:true,
  seed:true,
  db:
  {
    //url:'mongodb://localhost/marketUsers'
    url:process.env.MONGOLAB_URI
  }
}