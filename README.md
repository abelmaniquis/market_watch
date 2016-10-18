Description:

This app will be a miniature representation of the stock market.
This app will use the Quandl API to follow changes in the stock market.

A user will be given $1000000 to invest in a portfolio.


1. Minimum one endpoint with all 4 request types
2. Tests covered 
3. Enviroment variables for 3 different environments: test, production, development
4. Errors fully handled 
5. I/O data fully validated (mongoose and node validation)
6. Optional: Security (Lusca and xss-filters modules)
7. Sockets implemented
8. PassportJS or JSON Web Tokens implemented

2,4,6 super important

OLD PROFILE:

const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');
const {createStore,bindActionCreators} = require('redux');
const {Provider,connect} = require('react-redux');
const {render} = require('react-dom');


var stockList = ['GOOG','NFLX','AMZN'];


class Head extends React.Component{
  render(){
    return(
      <table className="tableHead">
        <tbody>
          <tr>
          <th>Ticker</th>
          <th>Open</th>
          <th>Close</th>
          <th>Trend</th>
          <th>On Date</th>
          <th>Value</th>
          <th>Quantity</th>
          </tr>
        </tbody>
    </table>  
      )
  }
}

class MyStockList extends React.Component{
  render(){
    return(
  <div className='myStocks'>
      <UserStockData keyword={stockList[0]}/>
      <UserStockData keyword={stockList[1]}/>
      <UserStockData keyword={stockList[2]}/>
      
  </div>
  )
  }
}

class AddStock extends React.Component{
  handleSubmit(e){
    stockList.push('GOOG');
    console.log(stockList);
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: {},
      name: "",
      ticker: "",
      prices: [],
      keyword: this.props.keyword,
      cash:1000000
    }
  }
  handleChange(event){
      this.setState({value: event.target.value});
  }
  
  render() {
    return (
    <div className="my-profile">
      <h1>My Profile</h1>
      <h1>My Cash: {this.state.cash}</h1>
      
    <div className="myInput">
      <input type='text'></input>
      <button>Submit</button>
    </div>
    
      <h2>Watchlist</h2>
    
    <Head/>
    <MyStockList/>
    </div>
    )
  }
}

module.exports = Profile;
