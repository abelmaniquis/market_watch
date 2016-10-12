const React = require('react');
const Data = require('./Data');
const Header = require('./Header');
const reactDOM = require('react-dom');
const {object,string} = React.PropTypes
const {Router, Route, IndexRoute,hashHistory} = require('react-router');

const Profile = React.createClass({
  propTypes:{
    route:object
  },
  render() {
    return (
  
  <div className='myStocks'>
    <h1>My Stocks</h1>
    <Header/>
    <Data keyword={'GOOG'} key={1}/>
  </div>
    )
  }
})

module.exports = Profile;