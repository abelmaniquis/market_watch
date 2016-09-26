const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing');
const Details = require('./Details');
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { stocks } = require('../public/tickers')
const { store } = require('./Store')
const { Provider } = require('react-redux')

console.log({ stocks })

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Landing} stocks={stocks}/>
      <Route path='/details/:id' component={Details} stocks={stocks}/>
    </Router>
  </Provider>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('app'))

/*

Front End posted on:
https://abelmaniquis.github.io/market_watch/#/?_k=8woh2c
*/