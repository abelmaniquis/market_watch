const React = require('react')
const Data = require('./Data')
const Header = require('./Header')
const {object,string} = React.PropTypes
const {connector} = require('./Store')

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
        <form className="login" action='/login' method='post'>
          
          <div className="user-input">
            <label>Username</label>
            <input type="text" name="username" className="usernameInput"/>
          </div>
          
          <div className="user-input">
            <label>Password</label>
            <input type="password" name="password" className="passwordInput"/>
          </div>
          
        </form>
        <Header/>
      </div>
      <div className='stocks'>
        {this.props.route.stocks
        .filter((stock) =>`${stock.ticker}${stock.name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >=0)
        .map((stock,index)=>(<Data keyword={stock.ticker} key={index}/>))}
        {console.log(this.props.route.stocks)}
      </div>
    </div>
    )
  }
})

module.exports = connector(Landing)