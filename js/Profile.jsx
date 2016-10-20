const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');

const list = require('../public/tickers.json');


var stockList = ['GOOG','NFLX','AMZN'];

class Profile extends React.Component{
  render(){
    console.log("HERE'S THE FULL LIST OF STOCKS:")
    console.log(list.stocks);
    return(
      <div>
        <h1 className="watchlist-title">My Watchlist</h1>
        <hr/>
        <StockAdder addStock={this.props.addStock}/>
        <hr/>
        <MyStocks stocks={this.props.stocks}/> 
      </div>
    )
  }
}

class MyStocks extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    
    return(
      <ul className="myStocks">
          <li>
            <UserStockData keyword={'GOOG'} key={1}/>
          </li>
      </ul>
      )
  }
}

class StockAdder extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    let refs = this.refs;
    let stock= refs.stock.value;
    stockList.push(stock);
    console.log(stockList);
    this.props.addStock(stock);
    refs.addStock.reset();
  }
  render(){
    return(
      <div className="row">
        <div className="column">
          <form ref="addStock" onSubmit={this.handleSubmit.bind(this)}>
            <input id="stock" type="text" ref="stock" placeholder="Enter a Stock Ticker to Add to your Portfolio"/>
            <button type="submit" className="button">Add Stock</button>
          </form>
        </div>
      </div>
    )
  }
  
}

module.exports = Profile;