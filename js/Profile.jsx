const React = require('react');
const reactDOM = require('react-dom');
const {Router, Route, IndexRoute,hashHistory} = require('react-router');

const Profile = React.createClass({
  render() {
    return (
      <div className='profile-container'>
    <h1>Hello profile page</h1>
    <h3>This will display the user's stocks</h3>
    <table className="myStocks">
    
    </table>
  </div>
    )
  }
})

module.exports = Profile;