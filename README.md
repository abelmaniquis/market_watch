Facebook:
https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=PqxkDaWHTxrB8VHFSDVS

Google:
https://www.quandl.com/api/v3/datasets/WIKI/GOOGL.json?api_key=PqxkDaWHTxrB8VHFSDVS

Netflix
https://www.quandl.com/api/v3/datasets/WIKI/NFLX.json?api_key=PqxkDaWHTxrB8VHFSDVS

Example:
https://dbrusky1.github.io/marketDataTwo/#/stocks


DataCard version 1:

const React = require('react')
const axios = require('axios')

var keyword = 'FB'
var dataToReturn = {};

dataToReturn.id
dataToReturn.name = ""
dataToReturn.ticker = ""
dataToReturn.prices = [];

const Data = axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${keyword}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
.then((response) =>{
  var i = 0
  dataToReturn.name += response.data.dataset.name;
  dataToReturn.ticker += response.data.dataset.dataset_code;
  dataToReturn.id =response.data.dataset.id;
  while(i < response.data.dataset.column_names.length){
    dataToReturn.prices.push(response.data.dataset.column_names[i] +" : " + response.data.dataset.data[0][i]);
    i += 1
  }
  console.log(dataToReturn);
  return dataToReturn;
});

module.exports = Data;# market_watch
