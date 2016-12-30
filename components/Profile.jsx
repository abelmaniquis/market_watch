const React = require('react');
const axios = require('axios');
const {Link} = require('react-router');
const Data = require('./Data');
const {Router} = require('react-router');
const UserStockData = require('./UserStockData');
const list = require('../public/tickers.json');
const d3 = require('d3');
const TextScroll = require('./TextScroll.jsx')
const TableHead = require('./TableHead.jsx')

class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      cash: 0,
      stocks: [],
      quandlInfo: null
    };
    this.addStock = this.addStock.bind(this);
    this.removeStock = this.removeStock.bind(this);
    this.updateList = this.updateList.bind(this);
  }
  componentWillMount() {
    this.updateList();
  }
  updateList() {
    axios.get('/api/profile/myInfo').then((response) => {
      this.setState({
        username: response.data.username,
        cash: response.data.cash,
        stocks: response.data.portfolio
      })
    })
  }
  addStock(e) {
    e.preventDefault();
    
    this.setState({
      id: this.state.id += 1
    })
    console.log(this.state.id)
    
    let stockUpdateStore = this.state.stocks
    let stockToAdd = this.refs.addInput.value;
    
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stockToAdd}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
      .then((response) => {
        this.setState({
          quandlInfo: response
        })
      }).catch(function(error) {
        alert("It appears that that stock does not exist");
      })
    if (this.state.stocks.indexOf(stockToAdd) > -1) {
      alert("This stock is already included")
    }
    else if (stockToAdd === "") {
      alert("You must enter a valid stock");
    }
    else {
      stockUpdateStore.push(stockToAdd);
      axios.put(`/api/profile/myInfo/${stockToAdd}`)
        .then((response) => {
          this.setState({
            stocks: stockUpdateStore
          });
        }).catch(function(error) {
          alert(`received this error: ${error}`);
        });
    }
    this.refs.addInput.value = '';
  }
  removeStock(stock){
   /*
   follow this example:
   http://jsfiddle.net/jwm6k66c/315/
   
   */
   var newState = this.state.stocks
    if(newState.indexOf(stock) > -1){
      newState.splice(newState.indexOf(stock),1)
      this.setState({
        stocks: newState
      })
    }
   
  }
  render() {
      let displayStocks = this.state.stocks.map((stock,i) => {
      return (
        <UserStockData keyword={stock} key={stock} keyView = {i} removeStock ={this.removeStock}/>
      )
    })
    
    return (
      <div className="userProfile">
        <h1 className='title'>{this.state.username}'s Portfolio</h1>
        <h3><Link to="/">LOG OUT</Link></h3>
        
        <div className='searchContainer'>
        <form onSubmit={this.addStock}>
          <input type="text" placeholder = "Stock ticker (e.g: GOOG, AAPL, YHOO)" ref="addInput" />
          <button className="submitButton">Add</button>
        </form>
        </div>
        
        <TableHead />
        {displayStocks}
      </div>
    )
  }
}

module.exports = View;
