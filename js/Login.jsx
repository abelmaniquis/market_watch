const React = require('react');
const reactDOM = require('react-dom')
const {Router,Route,IndexRoute,browserHistory} = require('react-router')
const axios = require('axios');
//https://facebook.github.io/react/docs/forms.html
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isLoggedIn: false,
      error: null
    };
    //this.formSubmit = this.formSubmit.bind(this);
    
    //<form onSubmit={this.handleSubmit}>
  }
  
  validateEmail(){
    
  }
  
  validatePassword(){
    
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/users/login',{
      username:'Abel',
      password:'12345'
    }).then((response)=>{
      console.log(response);
    }).catch(function(err){
      console.log(err);
    });
  }
  
  //original form:  <form action = "/api/users/login" method="post">
  
  render() {
    return (
      <div className='signupContainer'>
      <h1>Log in here</h1>
      
      <form onSubmit={this.handleSubmit.bind(this)}>
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
