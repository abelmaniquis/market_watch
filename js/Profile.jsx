const React = require('react');
const axios = require('axios');
const {Link} = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');
const list = require('../public/tickers.json');

class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'', //Set username state here
      cash:0,
      stocks:[],
      quandlInfo: null
    }
  }componentWillMount(){
    axios.get('/api/profile/myInfo').then((response)=>{
      console.log(response.data);
      
      this.setState({
        username:response.data.username,
        cash:response.data.cash,
        stocks:response.data.portfolio
      })
      console.log("User's info in front end: ",this.state);
    })
  }
  addStock(e) {
    e.preventDefault();
    
    var stockToAdd = this.refs.addInput.value;
    console.log(stockToAdd);
    
    axios.put(`/api/users/${this.state.username}/${this.refs.addInput.value}`)
    .then((response)=>{
      console.log(response);
    })
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stockToAdd}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
    .then((response)=>{
      console.log("QUANDL INFO")
      this.setState({quandlInfo: response})
      console.log(this.state.quandlInfo.data.dataset.column_names);
      console.log(this.state.quandlInfo.data.dataset.data[0][4]);
      console.log(this.state.cash);
      var currentPrice = this.state.quandlInfo.data.dataset.data[0][4];
      var currentCash = this.state.cash;
      console.log(currentCash - currentPrice);
      this.setState({cash:currentCash - currentPrice})
      console.log(this.state);
    })
    
    const stockUpdateStore = this.state.stocks
    
    if(this.state.stocks.indexOf(stockToAdd) > -1){
      console.log("this stock is already included")
    }else{
      stockUpdateStore.push(stockToAdd);
    }
    this.refs.addInput.value = '';

    this.setState({
      stocks: stockUpdateStore
    })
    console.log(this.state);
  }
  render() {
    return (
      <div>
      
        <h1>My Portfolio</h1>
      
        <form onSubmit={ this.addStock.bind(this) }>
          <input type="text" placeholder = "Enter Stock Ticker Here" ref="addInput" />
          <button>Add</button>
        </form>
        
        <Link to="/fullList">Check out the full list of stocks here</Link>
        
        <table className="tableHead">
        <tbody>
          <tr>
          <th>Ticker</th>
          <th>Open</th>
          <th>Close</th>
          <th>High</th>
          <th>Low</th>
          <th>Trend</th>
          <th>Buy</th>
          <th>Sell</th>
          <th>Quant</th>
          <th>Value</th>
          </tr>
        </tbody>
    </table>
          {
            this.state.stocks.map((stock,i)=>{
              return(
                <UserStockData keyword={stock} key={i}/>
              )
            })
          }
      </div>
    )
  }
}

module.exports = View;
