const React = require('react');
const reactDOM = require('react-dom')
const {
  Router,
  Route,
  IndexRoute,
  hashHistory
} = require('react-router')
const axios = require('axios');
//https://facebook.github.io/react/docs/forms.html

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
   this.setState({username:this.target.username,password:this.target.password})
   console.log(this.state);
  }
//Make sure that this is correct;
// Most essential thing is figuring out if we are sending anything
// Right now, front end and back end are not interacting properly.

// https://jsonplaceholder.typicode.com/users
//do an axios.post request on /api/users/login
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value )
    axios.post('/api/users/login/',{
      username:'aaaaa',
      password:'12345'
    })
    .then((response) =>{
     console.log("SHOULD LOG IN USER")
     console.log(response)
    }).catch(function(err){
      console.log(err);
    })
  }
  render() {
    return (
      <div className='signupContainer'>
      <h1>Log in here</h1>
      <form onSubmit={this.handleSubmit}>
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