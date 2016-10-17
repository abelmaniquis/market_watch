const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');
const {createStore,bindActionCreators} = require('redux');
const {Provider,connect} = require('react-redux');
const {render} = require('react-dom');


const stockList = ['GOOG','NFLX','AMZN'];


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
    e.preventDefault();
    let refs = this.refs;
    let stock = refs.name.value;
    let quantity = refs.quant.value;
    
    this.props.addStock(stock,quantity)
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
