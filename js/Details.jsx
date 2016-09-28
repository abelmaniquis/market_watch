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
      console.log(response.data.dataset.data[0]);
      this.setState({
        ticker: response.data.dataset.dataset_code,
        name: response.data.dataset.name,
        logTitles: response.data.dataset.column_names,
        priceLog: response.data.dataset.data
      });
      console.log(this.state.name)
    });
  }
  render(){
    
    var displayDates = [];
    var i = 0;
    while(i < 10){
      displayDates.push(this.state.priceLog[i]);
      i++;
    }
    
    console.log('dates');
    console.log(displayDates);
    return(
    <div className="Data">
      <h1>{this.state.name}</h1>
      <p><Link to='/'>Back to Homepage</Link></p>
      <button> Add to my Watchlist</button>
      <h1>Stock History</h1>
          <pre><code>
          {JSON.stringify(this.state, null, 4)}
        </code></pre>
        
        <p>{}</p>
        
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
