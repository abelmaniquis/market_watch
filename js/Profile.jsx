const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');
const list = require('../public/tickers.json');

class View extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     stocks: []
    }
  }
  render(){
    return(
      <div>
        <h1>Hello Profile</h1>
      </div>
    )
  }
}

module.exports = View;