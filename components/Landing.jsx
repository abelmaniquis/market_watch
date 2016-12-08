const React = require('react');
const Data = require('./Data');
const Header = require('./Header');
const {object,string} = React.PropTypes;
const {connector} = require('./Store');
const { Link } = require('react-router');

const Landing = () =>{
    return (
      <div className='home-info'>
        <h1 className='title'>MarketSource</h1>
        <div className='buttonContainer'>
        <fieldset>
          <form action="/signup">
          <button className='submitButton' type="submit">Register</button>
          </form>
        
          <form action="/login">
          <button className='submitButton' type="submit">Log in</button>
          </form>
        </fieldset>

        </div>
        
        <div className="description">
          <p>Create a watchlist of stocks</p>
        </div>
        
      </div>
    )
}

module.exports = connector(Landing)