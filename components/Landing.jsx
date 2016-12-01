const React = require('react');
const Data = require('./Data');
const Header = require('./Header');
const {object,string} = React.PropTypes;
const {connector} = require('./Store');
const { Link } = require('react-router');
//const FontAwesome = require('react-fontawesome');

const Landing = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string,
  },
  getInitialState(){
    return{
      searchTerm: ''
    }
  },
  handleSearchTermEvent(event){
    this.setState({searchTerm: event.target.value})
  },
  render() {
    return (
      <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>MarketWatch!</h1>
        <div className='buttonContainer'>
          <form action="/login">
          <button className='submitButton' type="submit">Log in here</button>
          </form>
        
          <form action="/signup">
          <button className='submitButton' type="submit">Sign up here</button>
          </form>
        </div>
        
        <div className="description">
        
        </div>
        
      </div>
    </div>
    )
  }
})

module.exports = connector(Landing)