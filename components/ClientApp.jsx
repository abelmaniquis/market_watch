const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing');
const Details = require('./Details');
const Profile = require('./Profile');
const Signup = require('./Signup');
const Login = require('./Login');
const FullList = require('./FullList');
const TestPage = require('./TestPage');
const { Router, Route, IndexRoute, hashHistory,browserHistory } = require('react-router')
const { stocks } = require('../public/tickers')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const NotFound = require('./NotFound')

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Landing} stocks={stocks}/>
        <Route path='/fullList' component={FullList} stocks={stocks}/>
        <Route path='/details/:id' component={Details} onEnter={this.assignStock} />
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/login/profile/:username' component={Profile}/>
        <Route path='/test' component={TestPage}/>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>)
  }
}
ReactDOM.render(<App/>, document.getElementById('app'))


