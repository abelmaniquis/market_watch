const React = require('react');
const axios = require('axios');
const {Link} = require('react-router');
const Data = require('./Data');
const {Router} = require('react-router');
const UserStockData = require('./UserStockData');
//const list = require('../public/tickers.json');
const TypeAhead = require('./TypeAhead.jsx');
const d3 = require('d3');
const TextScroll = require('./TextScroll.jsx')

class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      cash:0,
      stocks:[],
      quandlInfo: null
    };
    
    this.addStock = this.addStock.bind(this);
    this.removeStock = this.removeStock.bind(this);
    
  }
  componentWillMount(){
    axios.get('/api/profile/myInfo').then((response)=>{
      this.setState({
        username:response.data.username,
        cash:response.data.cash,
        stocks:response.data.portfolio
      })
    })
  }
  addStock(e) {
    e.preventDefault();
    
    var stockToAdd = this.refs.addInput.value;
    
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stockToAdd}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
    .then((response)=>{
      this.setState({quandlInfo: response})
      var currentPrice = this.state.quandlInfo.data.dataset.data[0][4];
      var currentCash = this.state.cash;
      
      this.setState({cash:currentCash - currentPrice})
      
      if(this.cash === 0){
        alert("You are out of money");
      }
    })
    
    const stockUpdateStore = this.state.stocks
    
    if(this.state.stocks.indexOf(stockToAdd) > -1){
      alert("This stock is already included")
    }
    else if(stockToAdd === ""){
      alert("You must enter a valid stock");
    }
    else{
      stockUpdateStore.push(stockToAdd);
      axios.put(`/api/profile/myInfo/${stockToAdd}`)
    .then((response)=>{
      this.setState({stocks: stockUpdateStore});
    })
    }
    this.refs.addInput.value = '';
  }
  removeStock(){
   axios.get('/api/profile/myInfo').then((response)=>{
     console.log("updated portfolio: ", response.data.portfolio);
     this.setState({
       stocks:response.data.portfolio
     })
   })
   
  }
  render() {
    return (
      <div className="userProfile">
        
        <TextScroll/>
        
        <h1 className='title'>{this.state.username}'s Portfolio</h1>
        
        <h3><Link to="/">LOG OUT</Link></h3>
      
        <div className='searchContainer'>
        
        <form onSubmit={this.addStock}>
        <input type="text" placeholder = "Enter Stock Ticker Here" ref="addInput" />
        <button className="submitButton">Add</button>
        </form>
        </div>

        <table className="tableHead">
        <tbody>
          <tr>
          <th>Ticker</th>
          <th>Open</th>
          <th>Close</th>
          <th>High</th>
          <th>Low</th>
          <th>Trend</th>
          <th>Delete</th>
          </tr>
        </tbody>
    </table>
          {
            this.state.stocks.map((stock,i)=>{
              return(
                <UserStockData keyword={stock} removeStock={this.removeStock} key={i}/>
              )
            })
          }
      </div>
    )
  }
}

module.exports = View;
