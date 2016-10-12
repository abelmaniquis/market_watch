const React = require('react');
const Data = require('./Data');
const Header = require('./Header');
const reactDOM = require('react-dom');
const {object,string} = React.PropTypes
const {Router, Route, IndexRoute,hashHistory} = require('react-router');

const Profile = React.createClass({
  propTypes:{
    route:object,
    money:1000000
  },
  render() {
    
    console.log(this.props.params.id)
    return (
  
  <div className='myStocks'>
    <h1>{this.props.params.id}'s Stocks</h1>
    <h1>{this.props.params.id}'s Cash: {1000000}</h1>
    <Header/>
    <Data keyword={'GOOG'}/>
    <Data keyword={'NFLX'}/> 
  </div>
    )
  }
})

module.exports = Profile;