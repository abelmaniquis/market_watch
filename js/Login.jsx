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
//Make sure that this is correct;
// Most essential thing is figuring out if we are sending anything
// Right now, front end and back end are not interacting properly.

// https://jsonplaceholder.typicode.com/users

//do an axios.post request
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/users/signup')
    .then((response) =>{
      console.log(response);
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