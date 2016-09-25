const React = require('react')
const Data = require('./Data')
const Header = require('./Header')
const {object,string} = React.PropTypes
const {connector} = require('./Store')

const Landing = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render() {
    return (
      <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>Stocks</h1>
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