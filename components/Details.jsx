//newyorktimes api key = dbe98497b30d4e558156fc8c7bfc301b
//should take in Data.state.ticker

//news api key: 3009df8d586e40cf8ee9664e44571061

const React = require('react')
const axios = require('axios')
const Data = require('./Data')
const { Link } = require('react-router')

class Details extends React.Component{
  constructor(props){
    super(props)
    console.log("Details state: ")
    console.log(this.props.params);
    this.state = {
      id:{},
      name:"",
      ticker:"",
      logTitles:[],
      priceLog:[]
    }
  }
  componentDidMount(){
   axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${this.props.params.id}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
    .then((response)=>{
      this.setState({
        ticker: response.data.dataset.dataset_code,
        name: response.data.dataset.name,
        logTitles: response.data.dataset.column_names,
        priceLog: response.data.dataset.data
      });
    });
  }componentDidMount(){
   axios.get(`https://content.guardianapis.com/search?q="${this.state.name}"&tag=politics/politics&from-date=2014-01-01&api-key= 526bb08c-1bbc-41f2-a4ab-3e0669d251c0`)
   .then((response)=>{
     console.log(response.data);
   }) //Guardian API key:  526bb08c-1bbc-41f2-a4ab-3e0669d251c0
  }
  render(){
    return(
    <div className="FurtherDetails">
      <h1>{this.state.name}</h1>
      <p><Link to='/'>Back to Homepage</Link></p>
      <p><Link to="/profile/aUser">Add to my Profile/Watchlist</Link></p>
      <h1>Stock History for {this.state.ticker}</h1>
          <pre><code>
          {JSON.stringify(this.state.logTitles, null, 4)}
          {JSON.stringify(this.state.priceLog, null, 4)}
        </code></pre>
        <p>"Updated"</p>
    </div>
    )
  }
}
module.exports = Details
