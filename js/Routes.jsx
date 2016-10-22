const React = require('react')
const {Route,IndexRoute} = require('react-router')
const Landing = require('./Landing');
const Details = require('./Details');
const Signup = require('./Signup');
const Login = require('./Login');
const Profile = require('./Profile');
const TestPage = require('./TestPage');
const NotFound = require('./NotFound');

const routes = (
<Route path="/" component={Landing}>
  <IndexRoute component={Landing}/>
  <Route path="/details/:id" component={Details}/>
  <Route path='/signup' component={Signup}/>
  <Route path='/login' component={Login}/>
  <Route path='/login/profile/:user' component={Profile}/>
  <Route path="*" component={NotFound}/>
</Route>
)

export default routes;