const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing');
const Details = require('./Details');
const Profile = require('./Profile');
const Signup = require('./Signup');
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { stocks } = require('../public/tickers')
const { store } = require('./Store')
const { Provider } = require('react-redux')
console.log({ stocks })

const App = React.createClass({
  assignStock(nextState,replace){
    const stockArray = stocks.filter((stock) => stock.ticker === nextState.params.id)
    if(stockArray.length < 1){
      return replace('/')
    }
    Object.assign(nextState.params,stockArray[0])
      return nextState
  },
  render() {
    return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={Landing} stocks={stocks}/>
        <Route path='/details/:id' component={Details} onEnter={this.assignStock} />
        <Route path='/signup' component={Signup}/>
        <Route path='/profile/:id' component={Profile}/>
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