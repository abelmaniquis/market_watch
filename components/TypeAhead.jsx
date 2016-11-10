//https://github.com/erikschlegel/React-Twitter-Typeahead
//https://www.npmjs.com/package/react-typeahead

const React = require('react');
const StocksToList = require('../public/tickers.json');
var Typeahead = require('react-typeahead').Typeahead;

class TypeAhead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      optArray: ['GOOG','YHOO','ATVI','AAPL']
    }
  }
  render() {
    return (
    <Typeahead
      options={this.state.optArray}
    maxVisible={2}
  />)
  }
}

module.exports = TypeAhead;
