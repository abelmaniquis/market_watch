const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing');
const Details = require('./Details');
const Profile = require('./Profile');
const Signup = require('./Signup');
const Login = require('./Login');
const TestPage = require('./TestPage');
const { Router, Route, IndexRoute, hashHistory,browserHistory } = require('react-router')
const { stocks } = require('../public/tickers')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const NotFound = require('./NotFound')

const App = React.createClass({
  
  /*
Use axios to redirect

succesful login or unsuccesful login
use axios to redirect

Use the front end to redirect, use framework features
don't use redirects in backend

*/
  
  assignStock(nextState,replace){
    const stockArray = stocks.filter((stock) => stock.ticker === nextState.params.id)
    if(stockArray.length < 1){
      return replace('/')
    }
    Object.assign(nextState.params,stockArray[0])
      return nextState
  },
  requireAuth(nextState){
    
  },
  render() {
    return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Landing} stocks={stocks}/>
        <Route path='/details/:id' component={Details} onEnter={this.assignStock} />
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/login/profile' component={Profile}/>
        <Route path='/test' component={TestPage}/>
        <Route path="*" component={NotFound}/>
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