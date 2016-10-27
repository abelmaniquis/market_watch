const React = require('react')
const {Router,Route,IndexRoute, browserHistory} = require('react-router')
const Landing = require('./Landing');
const Details = require('./Details');
const Signup = require('./Signup');
const Login = require('./Login');
const Profile = require('./Profile');
const TestPage = require('./TestPage');
const { stocks } = require('../public/tickers');
const NotFound = require('./NotFound');

const routes = (
      <Router history={browserHistory}>
        <Route path='/' component={Landing} stocks={stocks}/>
        <Route path='/details/:id' component={Details} onEnter={this.assignStock} />
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/login/profile' component={Profile}/>
        <Route path='/test' component={TestPage}/>
        <Route path="*" component={NotFound}/>
      </Router>
)

export default routes;