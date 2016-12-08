//https://github.com/erikschlegel/React-Twitter-Typeahead
//https://www.npmjs.com/package/react-typeahead

const React = require('react');
const StocksToList = require('../public/tickers.json');
var Typeahead = require('react-typeahead').Typeahead;

class TypeAhead extends React.Component {
  constructor(props){
    super(props)
    this.backgroundColor = 'white';
  }
  render() {
    var quoteArray = [];
    for(var i = 0; i < StocksToList.stocks.length; i++){
      quoteArray.push(StocksToList.stocks[i].ticker);
    }
    return (
    <Typeahead
      placeholder="Search available stocks"
      options={quoteArray}
      
      onTokenAdd={function(token){
        console.log("token added: ", token)
        console.log("token!")
      }}
      maxVisible={10}/>
      )
  }
}

module.exports = TypeAhead;
