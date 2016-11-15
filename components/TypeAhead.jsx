//https://github.com/erikschlegel/React-Twitter-Typeahead
//https://www.npmjs.com/package/react-typeahead

const React = require('react');
const StocksToList = require('../public/tickers.json');
var Typeahead = require('react-typeahead').Typeahead;

class TypeAhead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      optArray: [],
      backgroundColor:'white'
    }
  }
  render() {
    var quoteArray = [];
    console.log(StocksToList.stocks);
    for(var i = 0; i < StocksToList.stocks.length; i++){
      quoteArray.push(StocksToList.stocks[i].ticker);
    }
    return (
    <Typeahead
      placeholder="Typeahead Search"
      options={quoteArray}
      maxVisible={10}
    />)
  }
}

module.exports = TypeAhead;