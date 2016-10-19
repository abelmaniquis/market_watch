const React = require('react');
const axios = require('axios');
const { Link } = require('react-router');
const Data = require('./Data');
const UserStockData = require('./UserStockData');

const {createStore,bindActionCreators} = require('redux');
const {Provider,connect} = require('react-redux');
const {render} = require('react-dom');


var stockList = ['GOOG','NFLX','AMZN'];

class Profile extends React.Component{
  render(){
    return(
      <div>
        <h1>My Watchlist</h1>
        <hr/>
        <AddStock addStock={this.props.addStock}/>
        <hr/>
        <MyStocks stocks={stockList}/> 
      </div>
    )
  }
}
// MyStocks stocks should be this.props.stocks

/*

SOMETHING LIKE THIS SHOULD BE RETURNED BY MyStocks

{this.props.stocks.map((stock,index)=>{
            <li className="stocks_stock" key={index}>
              <UserStockData keyword={stock} key={index}/>
            </li>
          })}
*/

class MyStocks extends React.Component{
  render(){
  //  this.props.stocks = "GOOG";
    console.log(this.props);
    
    return(
      <ul className="myStocks">
        {this.props.stocks.map((stock,index)=>{
          console.log(stock,index);
          <li>
            <UserStockData keyword={stock} key={index}/>
          </li>
        })}
      </ul>
      )
  }
}

/*
<UserStockData keyword={this.props.stocks[0]}/>
<UserStockData keyword={this.props.stocks[1]}/>
*/

class AddStock extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    
    let refs = this.refs;
    console.log("REFS");
    console.log(refs);
    
    let name = refs.name.value;
    console.log(name);
    
    this.props.addStock(name);
    refs.addStock.reset();
  }
  
  render(){
    return(
      <div className="row">
        <div className="column">
          <form ref="addStock" onSubmit={this.handleSubmit.bind(this)}>
            <label for="name">Ticker</label>
            <input id="name" type="text" ref="name" placeholder="Enter a Stock Ticker to Add to your Portfolio"/>
            <button type="submit" className="button">Add Stock</button>
          </form>
        </div>
      </div>
    )
  }
  
}

/*--REDUCERS--*/
function reducer(state=[], action){
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
/*--ACTIONS--*/
const actions = {
  addStock:(stock)=>{
    return{
      //String for reducer to pick up
      type:'ADD_STOCK',
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

const Store = createStore(reducer,stockList);


module.exports = Profile;


