const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');

const {createStore,bindActionCreators} = require('redux');
const {Provider,connect} = require('react-redux');
const {render} = require('react-dom');

const list = require('../public/tickers.json');


var stockList = ['GOOG','NFLX','AMZN'];

class Profile extends React.Component{
  render(){
    console.log("HERE'S THE FULL LIST OF STOCKS:")
    console.log(list.stocks);
    
    console.log(this.props);
    console.log(this.props.addStock);
    console.log(this.props.stocks);
    return(
      <div>
        <h1>My Watchlist</h1>
        <hr/>
        <AddStock addStock={this.props.addStock}/>
        <hr/>
        <MyStocks stocks={this.props.stocks}/> 
      </div>
    )
  }
}

/*
MyStocks should return something like this:
<ul className="myStocks">
        {this.props.stocks.map((stock,index)=>{
          console.log(stock,index);
          <li>
            <UserStockData keyword={stock} key={index}/>
          </li>
        })}
      </ul>
*/

class MyStocks extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    console.log(this.props);
    
    return(
      <ul className="myStocks">
          <li>
            <UserStockData keyword={'GOOG'} key={1}/>
          </li>
      </ul>
      )
  }
}

class AddStock extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    let refs = this.refs;
    let stock= refs.stock.value;
    stockList.push(stock);
    console.log(stockList);
    
    this.props.addStock(stock);
    refs.addStock.reset();
  }
  render(){
    return(
      <div className="row">
        <div className="column">
          <form ref="addStock" onSubmit={this.handleSubmit.bind(this)}>
            <input id="stock" type="text" ref="stock" placeholder="Enter a Stock Ticker to Add to your Portfolio"/>
            <button type="submit" className="button">Add Stock</button>
          </form>
        </div>
        <div>
        {stockList[-1]}
        </div>
      </div>
    )
  }
  
}

/*--REDUCERS-- specifies how the state has changed*/
function reducer(state = [], action){
  switch (action.type){
    //return a new array with old state and added stock
    case 'ADD_STOCK':
      return [{
        stock:action.stock
      },
    ...state  
    ];
    default:
      return state;
  }
};

/*--ACTIONS specify that the state has changed--*/
const actions = {
  addStock:(stock)=>{
    return{
      //String for reducer to pick up
      type:'ADD_STOCK',
      
      //Stock that we send through the form
      stock
    }
  }
};

/*--STORE--*/
const ProfileContainer = connect(
  function mapStateToProps(state){
    return{
      stocks: state
    };
  },
  function mapDispatchToProps(actions,dispatch){
    return bindActionCreators(actions,dispatch); 
  }
)(Profile)

const store = createStore(reducer,stockList);

module.exports = Profile;