const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

class Data extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: {},
      name: "",
      ticker: "",
      prices: [],
      keyword: this.props.keyword,
    }
  }
  componentDidMount() {
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${this.state.keyword}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
      .then((response) => {
        var i = 0;
        while (i < response.data.dataset.column_names.length) {
          this.state.prices.push(response.data.dataset.data[0][i]);
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
    
    
    let trend = 'trending neutral'
    
    change >= 0 ? trend = "up" : trend = "down"
    
    return (
      <div className="data-container">
      <table>
      <tbody className="table-body">
        <tr>
          <th className='ticker'><Link to={`/details/${this.state.ticker}`}>{this.state.ticker}</Link></th>
          <th className='open'>{open}</th>
          <th className='high'>{high}</th>
          <th className='low'>{low}</th>
          <th className='close'>{close}</th>
          <th className='trend'>{trend}</th>
          <th className='onDate'>{date}</th>
        </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

module.exports = Data;