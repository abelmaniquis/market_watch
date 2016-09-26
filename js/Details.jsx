//newyorktime api key = dbe98497b30d4e558156fc8c7bfc301b

const React = require('react')
const axios = require('axios')
const Data = require('./Data')
const { Link } = require('react-router')

console.log(Data);

class Details extends React.Component{
  render(){
    return(
    <div className="Data">
      <p><Link to='/'>Back to Homepage</Link></p>
          <pre><code>
          {JSON.stringify(this.props.params, null, 4)}
        </code></pre>
    </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}


module.exports = Details
