//https://github.com/erikschlegel/React-Twitter-Typeahead
//https://www.npmjs.com/package/react-typeahead

const React = require('react');
const Typeahead = require('react-typeahead').Typeahead;
const StocksToList = require('../public/tickers.json');

class TypeAhead extends React.component {
    render(){
      return(
        <div>
        <h1>Hello from typeahead</h1>
        </div>
      )
    }
}


module.exports = TypeAhead;
