const React = require('react');
const reactDOM = require('react-dom')
const {Router,Route,IndexRoute,hashHistory} = require('react-router')
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
  }
  
  validateEmail(){
    
  }
  
  validatePassword(){
    
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/users/login').then((response)=>{
      console.log(response);
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
