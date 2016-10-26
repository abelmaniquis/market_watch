//http://www.tech-dojo.org/#!/articles/5697fd5ddb99acd646dea1aa
//https://github.com/tech-dojo/react-showcase/blob/master/app/services/Authentication.js
//https://github.com/tech-dojo/react-showcase/blob/master/app/components/Signin.jsx
//https://scotch.io/tutorials/routing-react-apps-the-complete-guide

//https://github.com/ReactTraining/react-router/blob/master/examples/auth-flow/auth.js

//following this example: https://github.com/ReactTraining/react-router/blob/master/examples/auth-flow/auth.js

let axios = require('axios');

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

}