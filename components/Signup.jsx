const React = require('react');
const reactDOM = require('react-dom')
const {Router,Route,IndexRoute,browserHistory} = require('react-router')
const axios = require('axios');

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: null
    };
    this.handleUserData = this.handleUserData.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserData(e){
    this.setState({username:e.target.value});
  }
  handlePassword(e){
    this.setState({password:e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/users/signup',{
      username:this.state.username,
      password:this.state.password
    }).then((response)=>{
      browserHistory.push(`/login/profile/${this.state.username}`);
    }).catch(function(err){
      alert(err);
      console.log(err);
    });
  }
  
  //original form:  <form action = "/api/users/login" method="post">
  
  render() {
    return (
      <div className='home-info'>
      <h1>Register</h1>
      
      <form className='user-submit' onSubmit={this.handleSubmit}>
        <div className="user-input">
          <input type="text"  
          value ={this.state.username} 
          onChange={this.handleUserData}
          placeholder="Username"
          name ="username" 
          className="type-here"/>
        </div>
        
        <div className="user-input">
             <input type="password" 
             value={this.state.password}
             onChange={this.handlePassword}
             name="password" 
             placeholder="Password"
             className="type-here"/>
        </div>
        
       <div className="submit-button">
           <input className = "button-type" type="submit" value="Submit"/>
       </div>
       
      <div class="link">
            <p><a href="/">Back to Homepage</a></p>
      </div>
       
      </form>
    </div>
    )
  }
}

module.exports = Signup
