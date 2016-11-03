//http://jsfiddle.net/faria/3nodz94g/

const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

//Keep the file name as UserStockData

class StockData extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: {},
      name: "",
      ticker: "",
      prices: [],
      keyword: this.props.keyword,
      quantity:1,
    }
  }
  componentDidMount() {
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${this.state.keyword}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
      .then((response) => {
        var i = 0;
        while (i < response.data.dataset.column_names.length) {
          //this.state.prices.push(response.data.dataset.data[0][i]); //This is how you work with mutable data structures
          this.setState({
            prices: this.state.prices.concat([response.data.dataset.data[0][i]])  //this is how you work with immutable data structures
          })
          
          //React works with immutable structures
          //mutating this.state, There are things that are immutable
          //strings are immutable, objects are not.
          //On line 27, you are changing the value of the array
          //arrays are changeable.
          //In react, state is supposed to be immutable, you cannot change it yourself
          //You need to treat this state as if it doesn't have a push method.
          
          //We should be using setstate on line 27
          //Take a copy of a previous array, and return a new
          
          //BIG PICTURE: You should not mutate state
          //How to distinguish: in general: start your line with this.setState, this.state should be read only
          //.push modifies an existing array, concat does not.
          
          i += 1;
        }
        this.setState({
          name: response.data.dataset.name,
          ticker: response.data.dataset.dataset_code,
          id: response.data.dataset.dataset_id
        });
      })
  }
  render() {
    
    let date = this.state.prices[0]
    let open = this.state.prices[1]
    let high = this.state.prices[2]
    let low = this.state.prices[3]
    let close = this.state.prices[4]
    let volume = this.state.prices[5]
    let exDividend = this.state.prices[6]
    let splitRatio = this.state.prices[7]
    let changeNum = parseFloat(Math.round(this.state.prices[4] - this.state.prices[1])*100/100).toFixed(2);
    let change = changeNum;
    let quantity = this.state.quantity;
    let value = close*this.state.quantity
    let trend = 'trending neutral'
    
    change >= 0 ? trend = "up" : trend = "down"
    
    return (
      <div className="data-container">
      <table>
      <tbody className="table-body">
        <tr>
          <th className='ticker'><Link to={`/details/${this.state.ticker}`}>{this.state.ticker}</Link></th>
          <th className='open'>{open}</th>
          <th className='close'>{close}</th>
          <th className='trend'>{trend}</th>
          <th className='onDate'>{date}</th>
          <th className='value'>{value}</th>
          <th className='delete-button'><button>Delete</button></th>
        </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

module.exports = StockData;