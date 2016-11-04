//https://github.com/erikschlegel/React-Twitter-Typeahead
//https://www.npmjs.com/package/react-typeahead

const React = require('react');
const Typeahead = require('react-typeahead').Typeahead;

class TypeBar extends React.component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Typeahead 
      options={['GOOG','NFLX','AMZN']}
      maxVisible={2}
      />
    )
  }
}

module.exports = TypeBar;
