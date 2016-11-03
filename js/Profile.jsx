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
      username:'abel', //Set username state here
      cash:0,
      currentStock:'NFLX', //current stock
      stocks:[],
      iterator:0
    }
  }
  addStock(e) {
    e.preventDefault();
    axios.put(`/api/users/${this.state.username}/${this.state.currentStock}`).then((response)=>{
      console.log(response);
    })
    //store current stocks in a variable
    
    const stockUpdateStore = this.state.stocks
    stockUpdateStore.push(this.refs.addInput.value);

    //clear input element
    this.refs.addInput.value = '';

    this.setState({
      stocks: stockUpdateStore
    })
  }
  render() {
    return (
      <div>
      
        <h1>My Watchlist</h1>
      
        <form onSubmit={ this.addStock.bind(this) }>
          <input type="text" placeholder = "Enter Stock Ticker Here" ref="addInput" />
          <button>Add</button>
        </form>
        
        <Link to="/">Check out the full list of stocks here</Link>
        
        <table className="tableHead">
        <tbody>
          <tr>
          <th>Ticker</th>
          <th>Open</th>
          <th>Close</th>
          <th>Trend</th>
          <th>On Date</th>
          <th>Value</th>
          <th>Delete</th>
          </tr>
        </tbody>
    </table>
        
        <ul>
          {
            this.state.stocks.map((stock,i)=>{
              return(
                <li key={i}>
                <UserStockData keyword = {stock} key={i}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = View;
