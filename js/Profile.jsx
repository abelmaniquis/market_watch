const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const Data = require('./Data')

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
      <div className='myStocks'>
      <Data keyword={'GOOG'}/>
      </div>
    </div>
    )
  }
}

module.exports = Profile;
