const React = require('react');
const axios = require('axios');
const {Link} = require('react-router');
const Data = require('./Data');
const {Router} = require('react-router');
const UserStockData = require('./UserStockData');
const list = require('../public/tickers.json');
const TypeAhead = require('./TypeAhead.jsx');

/*

Define all of my state here. (state must be in the parent)

The state must be here.

(In Redux all state belongs to store)

create a function on the profile.

use your stocks array here,
Must pass a function through props when button pushed on UserStockData
You call a function which will be on the profile.
This function will change the state on the parent.

children and parents in react

http://stackoverflow.com/questions/26176519/reactjs-call-parent-function

http://codepen.io/errorsmith/pen/mVQxMd?editors=0010

if you are on different files, you will be on a different scope,
so you will have to use bind(this)

*/


class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      cash:0,
      stocks:[],
      quandlInfo: null
    };
    this.addStock = this.addStock.bind(this);       //Find a way to pass these functions into UserStockData
    this.removeStock = this.removeStock.bind(this);
  }componentWillMount(){
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
    
      this.setState({cash:currentPrice - currentPrice})
      
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
   console.log(this.state.stocks);
   axios.get('/api/profile/myInfo').then((response)=>{
     console.log("updated portfolio: ", response.data.portfolio);
     this.setState({
       stocks:response.data.portfolio,
       cash:response.data.cash
     })
     
   })
   
   
  }
  render() {
    //cannot split typeahead component because children are not rendered in component definition
    return (
      <div>
        <h1 className='title'>{this.state.username}'s Portfolio</h1>
        
        <div className='searchContainer'>
        
         <TypeAhead>
         
         </TypeAhead>
         
         
        <form onSubmit={ this.addStock}>
           <input type="text" placeholder = "Enter Stock Ticker Here" ref="addInput" />
          <button>Add</button>
        </form>
        </div>
        
        <Link to="/fullList">Check out the full list of stocks here</Link>
        <div className="cashContainer">
          <h3 className="myCash">{this.state.cash}</h3>
          
        </div>
        
        <div className="logoutContainer">
        
        <h3><Link to="/">LOG OUT</Link></h3>
        
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
          <th>Buy</th>
          <th>Delete</th>
          <th>Quant</th>
          <th>Value</th>
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
