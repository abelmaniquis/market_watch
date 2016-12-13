//newyorktimes api key = dbe98497b30d4e558156fc8c7bfc301b
//should take in Data.state.ticker

//news api key: 3009df8d586e40cf8ee9664e44571061

const React = require('react')
const axios = require('axios')
const Data = require('./Data')
const {Link} = require('react-router')
const d3 = require('d3');
const VisualData = require('./VisualData');


class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      ticker: "",
      date:"",
      priceLog: [],
      logDates:[],
      logOpen:[],
      logHigh:[],
      logLow:[],
      logClose:[],
      logVolume:[],
      logExDiv:[],
      logSplitRatio:[],
      logAdjOpen:[],
      logAdjHigh:[],
      logAdjLow:[],
      logAdjClose:[],
      logAdjVol:[],
    }
  }
  componentDidMount() {
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${this.props.params.id}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
      .then((response) => {
        console.log("Response: ",response.data)
        var i = 0;
        var dates = [],
        open = [],
        close = [],
        high = [],
        low = []
        while(i < 7){
          dates.push(response.data.dataset.data[i][0])
          open.push(response.data.dataset.data[i][1])
          high.push(response.data.dataset.data[i][2])
          
          i += 1
        }
        
        console.log("open: ",open)
        console.log("close: ",close)
        
        this.setState({
          ticker: response.data.dataset.dataset_code,
          name: response.data.dataset.name,
          logTitles: response.data.dataset.column_names,
          priceLog: response.data.dataset.data,
          logOpen: open,
          logHigh: high
        })
          
      });
      
      console.log("this.state.logOpen: ",this.state.logOpen);
      
  }
  
  
  render() {
    
    console.log("Details.state: ",this.state)
    
    return (
      <div className="FurtherDetails">
      <h1>{this.state.name}</h1>
      
      <p><Link to={`/login/profile/${this.props.username}`}>Back to Homepage</Link></p>
      <h1>Stock History for {this.state.ticker}</h1>
        <h2>Trends</h2>
        
        <div className = 'chartContainer'>
          <VisualData data={this.state.logOpen} stock={this.state.ticker} dataName={"Opening Prices"}/>
        </div>
        
    </div>
    )
  }
}
module.exports = Details