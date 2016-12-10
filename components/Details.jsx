//newyorktimes api key = dbe98497b30d4e558156fc8c7bfc301b
//should take in Data.state.ticker

//news api key: 3009df8d586e40cf8ee9664e44571061

const React = require('react')
const axios = require('axios')
const Data = require('./Data')
const {Link} = require('react-router')
const d3 = require('d3');

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: {},
      name: "",
      ticker: "",
      logTitles: [],
      priceLog: [],
      dates:[]
    }
  }
  componentDidMount() {
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${this.props.params.id}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
      .then((response) => {
        
        var dateArray = [];
        
        this.setState({
          ticker: response.data.dataset.dataset_code,
          name: response.data.dataset.name,
          logTitles: response.data.dataset.column_names,
          statepriceLog: response.data.dataset.data});
        
          this.createChart = this.createChart.bind(this);
      });
  }createChart(){
  }
  render() {
    console.log(d3);
    
    var data = [4,8,15,16,23,42]
    
    var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);
    
    
    d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
    
    
    console.log("this.state.priceLog: ",this.state.priceLog)
    return (
      <div className="FurtherDetails">
      <h1>{this.state.name}</h1>
      <p><Link to='/'>Back to Homepage</Link></p>
      <p><Link to="/profile/aUser">Add to my Profile/Watchlist</Link></p>
      <h1>Stock History for {this.state.ticker}</h1>
      
        <div className="chart">
        </div>
      
    </div>
    )
  }
}
module.exports = Details