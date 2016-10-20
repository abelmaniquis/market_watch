const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');

const list = require('../public/tickers.json');
  
class View extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
     stocks: []
    }
  }
  
  addStock(e){
    e.preventDefault();
    
    //store current stocks in a variable
    const stockUpdateStore = this.state.stocks
    
    //Push the next item to the stocks state temporary storage
    stockUpdateStore.push(this.refs.addInput.value)
    
    //clear input element
    this.refs.addInput.value = '';
    
    this.setState({
      stocks: stockUpdateStore
    })
    
  }
  
  render(){
    return(
      <div>
          <form onSubmit={ this.addStock.bind(this) }>
          <input type="text" placeHolder = "Enter Stock Ticker Here" ref="addInput" />
          <button>Add</button>
        </form>
        
        <ul>
          {
            this.state.stocks.map((stock,i)=>{
              return(
                <li key={i}>
                <UserStockData keyword = {stock}/>
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