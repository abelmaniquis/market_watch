const React = require('react')
const axios = require('axios')
const Data = require('./Data')
const { Link } = require('react-router')

class Details extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      information: {},
      keyword: this.props.keyword,
      extendedInfo: []
    }
  }
  componentDidMount(){
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${'GOOG'}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
    .then((response) =>{
      console.log(response.data.dataset);
      var i = 0;
      while(i < 5){
        this.state.extendedInfo.push("some data");
      i += 1;
      }
      console.log(this.state.keyword)
    })
  }
  render(){
    return(
    <div className="Data">
      <h1>Details</h1>
      <p><Link to='/'>Back to Homepage</Link></p>
      
      <div className='container'>
        <div className='video-info'>
          <p>further stock information</p>
        </div>
      </div>
      
      <pre><code>
      
      </code></pre>
      
      <button>Add to Watchlist</button>
    </div>
    )
  }
}

module.exports = Details
