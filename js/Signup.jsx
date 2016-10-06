const React = require('react');
const reactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Signup = () =>{
  return(
    <div className='signupContainer'>
      <h1>Hello Signup</h1>
      <form action = "/signup" method= "post">
        <div className="user-input">
          <label>Username</label>
          <input type="text" name ="username" class="type-here"/>
        </div>
        
        <div class="user-input">
            <label>Password</label>
             <input type="password" name="password" class="type-here"/>
        </div>
        
       <div class="button">
           <input class = "button-type" type="submit" value="Submit"/>
       </div>
        
      </form>
    </div>
  )
}

module.exports = Signup;