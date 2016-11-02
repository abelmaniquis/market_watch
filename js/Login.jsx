const React = require('react');
const reactDOM = require('react-dom')
const {Router,Route,IndexRoute,browserHistory} = require('react-router')
const axios = require('axios');
//https://facebook.github.io/react/docs/forms.html
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      error: null
    };
    this.handleUserData = this.handleUserData.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleUserData(e){
    this.setState({username: e.target.value});
  }
  handlePassword(e){
    this.setState({password:e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("INFO FROM AXIOS")
    axios.post('/api/users/login',{
      username:this.state.username,
      password:this.state.password
    }).then((response)=>{
      browserHistory.push('/login/profile');
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
          
          <input type="text"  
          value ={this.state.username} 
          onChange={this.handleUserData}
          name ="username" 
          className="type-here"/>
          
        </div>
        
        <div className="user-input">
            <label>Password</label>
            
             <input type="password" 
             value={this.state.password}
             onChange={this.handlePassword}
             name="password" 
             className="type-here"/>
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
