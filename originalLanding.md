const React = require('react')
const Data = require('./Data')
const Header = require('./Header')
const Tickers = require('../public/tickers')
const { object, string } = React.PropTypes
const {connector} = require('./Store')

const Landing = React.createClass({
  getInitialState(){
    return{
      index: 0,
      route: object,
      searchTerm:'',
      rows:[]
    }
  },
  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm})
  },
  render(){
    console.log(this.state.rows)
    for(var i = 0; i<15; i++){ //Tickers.length
      this.state.rows.push(<Data keyword={Tickers[i].ticker} key={i}/>)
    }
  return (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>Stocks</h1>
        <Header/>
      </div>
      <div className='stocks'>
        {this.state.rows}
      </div>
    </div>
  )}
})

module.exports = connector(Landing)