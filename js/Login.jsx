const React = require('react');
const reactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Login = () =>{
  return(
    <div className='loginContainer'>
      <h1>Log In here</h1>
      <form action = "/login" method= "post">
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

module.exports = Login;