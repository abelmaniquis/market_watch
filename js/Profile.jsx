const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');


const {createStore,bindActionCreators} = require('redux');
const {Provider,connect} = require('react-redux');
const {render} = require('react-dom');


const stockList = [];

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


      <div className='myStocks'>
      <UserStockData keyword={'GOOG'}/>
      <UserStockData keyword={'NFLX'}/>
      <UserStockData keyword={'AMZN'}/>
      <UserStockData keyword={this.state} onChange={this.handleChange}/>
      </div>
    </div>
    )
  }
}

class UserStocks extends React.Component(){
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      </div>
    ) 
  }
}

class UserStock extends React.Component(){
  constructor(props){
    super(props);
  }
}

class AddStock extends React.Component(){
  
}

const UserStockData = require('./UserStockData');

module.exports = Profile;
