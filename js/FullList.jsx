const React = require('react')
const Data = require('./Data')
const Header = require('./Header')
const {object,string} = React.PropTypes
const {Link} = require('react-router')

class FullList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div class='list-container'>
      <div className='stocks'>
        {this.props.route.stocks
        .filter((stock) =>`${stock.ticker}${stock.name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >=0)
        .map((stock,index)=>(<Data keyword={stock.ticker} key={index}/>))}
      </div>
      </div>
    )
  }
}

module.exports = FullList