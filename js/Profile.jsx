const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const Data = require('./Data')
const UserStockData = require('./UserStockData')

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
  render() {
    return (
    <div className="my-profile">
      <h1>My Profile</h1>
      <h1>My Cash: {this.state.cash}</h1>
      
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
      </div>
    </div>
    )
  }
}

module.exports = Profile;
