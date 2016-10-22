const React = require('react');
const reactDOM = require('react-dom')
const {
  Router,
  Route,
  IndexRoute,
  hashHistory
} = require('react-router')
const axios = require('axios');
//This is where we do an axios call on our object

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("can you see this?");
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts') //Temporary placeholder. Will get user information from here
      .then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
      <div className='signupContainer'>
      <h1>Log in here</h1>
      <form action = "/#/login/profile/abel" method= "post">
        <div className="user-input">
          <label>Username</label>
          <input type="text" name ="username" className="type-here"/>
        </div>
        
        <div className="user-input">
            <label>Password</label>
             <input type="password" name="password" className="type-here"/>
        </div>
        
       <div className="button">
           <input className = "button-type" type="submit" value="Submit"/>
       </div>
        
      </form>
    </div>
    )
  }
}

module.exports = Login

/*
FOR REFERENCE:

import { browserHistory } from 'react-router';

class Login extends Component {
  state = { email: '', password: '' }
  handleSubmit(e) {
    e.preventDefault();
    const form = e.target
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="password"]').value;

    axios
      .push(url, { email, password })
      .then(res => res.json)
      .then(() => browserHistory.push(`/profile/${res.body.email}`))

  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          onChange={email => this.setState({ email })} 
          type="text" placeholder="Email here" name="email" />
        <input
          onChange={password => this.setState({ password })} 
          type="password" placeholder="Password here" name="password" />
      </form>
    );
  }
}

export default Login;


*/