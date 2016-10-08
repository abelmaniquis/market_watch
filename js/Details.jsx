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
      console.log(`date: ${this.state.priceLog[0][0]}`);
      console.log(`open: ${this.state.priceLog[0][1]}`);
      console.log(`high: ${this.state.priceLog[0][2]}`);
      console.log(`low: ${this.state.priceLog[0][3]}`);
      console.log(`close: ${this.state.priceLog[0][4]}`);
      console.log(`volume: ${this.state.priceLog[0][5]}`)
    });
  }
  render(){
    console.log(this.state.priceLog[0][0]);
    return(
    <div className="FurtherDetails">
      <h1>{this.state.name}</h1>
      <p><Link to='/'>Back to Homepage</Link></p>
      <button> Add to my Watchlist</button>
      <h1>Stock History for {this.state.ticker}</h1>
      
      <p>{this.state.priceLog[0]}</p>
      <p>{this.state.priceLog[0]}</p>
      <p>{this.state.priceLog[0]}</p>
          <pre><code>
          {JSON.stringify(this.state, null, 4)}
        </code></pre>
        <p>"Updated"</p>
    </div>
    )
  }
}

const { object } = React.PropTypes
Details.propTypes = {
  params: object.isRequired
}
console.log("object: ")
console.log({object})

module.exports = Details
