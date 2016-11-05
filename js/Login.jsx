const React = require('react');
const reactDOM = require('react-dom')
const {Router,Route,IndexRoute,browserHistory} = require('react-router')
const axios = require('axios');

class Login extends React.Component {
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
    axios.post('/api/users/login',{
      username:this.state.username,
      password:this.state.password
    }).then((response)=>{
      browserHistory.push(`/login/profile/${this.state.username}`);
    }).catch(function(err){
      alert(err);
      console.log(err);
    });
  }
  
  render() {
    return (
      <div className='home-info'>
      <h1>Log in here</h1>
      
      <form className='user-submit' onSubmit={this.handleSubmit}>
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
        
       <div className="submit-button">
           <input className = "button-type" type="submit" value="Submit"/>
       </div>
      
      </form>
    </div>
    )
  }
}

module.exports = Login
