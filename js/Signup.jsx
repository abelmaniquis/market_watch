/*
https://www.youtube.com/watch?v=97fT5ZOcpp4&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=6
*/
/*
https://www.youtube.com/watch?v=97fT5ZOcpp4&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=6
*/

import React from 'react';
import reactDOM from 'react-dom';
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const axios = require('axios')

class Signup extends React.Component{
 constructor(props,context){
   super(props,context)
 }
 
 handleSubmit(e){
   e.preventDefault();
   axios.post('/api/profile/signup')
 }
 
 render(){
  return(
    <div className='signupContainer'>
      <h1>Sign Up here</h1>
      <form action = "/api/users/signup" method= "post">
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

module.exports = Signup;