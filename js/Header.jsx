const React = require('react');
const { Link } = require('react-router');
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')

const SearchHeader = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent(event) {
    this.props.setSearchTerm(event.target.value)
  },
  render() {
      let searchSpace = <input className='search-input' 
      type='text' 
      placeholder='This should filter the stocks below' 
      value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
      return(
      <header className='header'>
        {searchSpace}
      <table>
        <tbody>
          <th>Ticker</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Change</th>
          <th>Trend</th>
          <th>On Date</th>
        </tbody>
    </table>
      </header>)
  }
})

module.exports = connector(SearchHeader);