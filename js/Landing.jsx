const React = require('react')
const Data = require('./Data')
const Header = require('./Header')
const {object,string} = React.PropTypes
const {connector} = require('./Store')
const { Link } = require('react-router')
const Description = require('./Description')


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
        <h1 className='title'>MarketWatch</h1>
        
        <div className='buttonContainer'>
          <form action="/login">
          <input type="submit" value="Log in here" />
          </form>
        
          <form action="/signup">
          <input type="submit" value="Sign up here" />
          </form>
        </div>
        
        <h4>Or just check the markets below:</h4>
        <Header/>
      </div>
      <div className='stocks'>
        {this.props.route.stocks
        .filter((stock) =>`${stock.ticker}${stock.name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >=0)
        .map((stock,index)=>(<Data keyword={stock.ticker} key={index}/>))}
      </div>
    </div>
    )
  }
})

module.exports = connector(Landing)