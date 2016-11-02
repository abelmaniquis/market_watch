const React = require('react');
const axios = require('axios');
const {Link} = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');
const list = require('../public/tickers.json');
/*
get user info from back end

*/

class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: []
    }
  }

  componentDidMount() {
    axios.post('/api/profile/userInfo') //Where the API will be called
      .then((response) => {
        //Take stocks saved in user object and push them into the this.state.stock
        console.log(response);
        console.log(this.state.stocks);
      })
  }

  addStock(e) {
    e.preventDefault();
    axios.put('/api/profile/userInfo').then((response)=>{
      console.log(response);
    })
    //store current stocks in a variable
    const stockUpdateStore = this.state.stocks

    //Push the next item to the stocks state temporary storage
    this.state.stocks.push(this.refs.addInput.value);
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
          <input type="text" placeHolder = "Enter Stock Ticker Here" ref="addInput" />
          <button>Add</button>
        </form>
        
        <table className="tableHead">
        <tbody>
          <tr>
          <th>Ticker</th>
          <th>Open</th>
          <th>Close</th>
          <th>Trend</th>
          <th>On Date</th>
          <th>Value</th>
          <th>Quantity</th>
          </tr>
        </tbody>
    </table>
        
        <ul>
          {
            this.state.stocks.map((stock,i)=>{
            console.log(stock);
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
