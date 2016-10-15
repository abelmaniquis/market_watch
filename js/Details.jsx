//newyorktimes api key = dbe98497b30d4e558156fc8c7bfc301b
//should take in Data.state.ticker
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
      console.log(response.data.dataset.column_names);
      console.log(response.data.dataset.data[0][0]);
      this.setState({
        ticker: response.data.dataset.dataset_code,
        name: response.data.dataset.name,
        logTitles: response.data.dataset.column_names,
        priceLog: response.data.dataset.data
      });
      console.log("this.state.priceLog[0][0]");
      console.log('-')
      console.log('-')
      console.log('-')
      console.log(this.state)
      console.log(`date: ${this.state.priceLog[0][0]}`);
      console.log(`open: ${this.state.priceLog[0][1]}`);
      console.log(`high: ${this.state.priceLog[0][2]}`);
      console.log(`low: ${this.state.priceLog[0][3]}`);
      console.log(`close: ${this.state.priceLog[0][4]}`);
      console.log(`volume: ${this.state.priceLog[0][5]}`)
    });
  }
  render(){
    return(
    <div className="FurtherDetails">
      <h1>{this.state.name}</h1>
      <p><Link to='/'>Back to Homepage</Link></p>
      <p><Link to="/profile/aUser">BUY!:</Link>Quantity:<input type='text'/></p>
      <p><Link to="/profile/aUser">SELL!:</Link>Quantity:<input type='text'/></p>
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
