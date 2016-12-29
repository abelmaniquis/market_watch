const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const Loading = require('react-loading-animation')

class Data extends React.Component {
  constructor (props) {
    super(props)
    
    console.log(this.props);
    this.state = {
      id: {},
      name: '',
      ticker: '',
      prices: [],
      quantity: 1,
      appears: false,
      loaded: false
    }
    this.removeFromPortfolio = this.removeFromPortfolio.bind(this);
  }
  componentDidMount () {
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${this.props.keyword}.json?api_key=PqxkDaWHTxrB8VHFSDVS`)
      .then((response) => {
        var i = 0
        while (i < response.data.dataset.column_names.length) {
          this.state.prices.push(response.data.dataset.data[0][i])
          i += 1
        }
        this.setState({
          name: response.data.dataset.name,
          ticker: response.data.dataset.dataset_code,
          id: response.data.dataset.dataset_id
        })
      })
  }
  removeFromPortfolio(){
    console.log(this.state.ticker)
    axios.put(`/api/profile/myInfo/sell/${this.state.ticker}`)
    .then((response)=>{
      console.log(response);
    });
  }
  render () {
    while (this.state.prices.length <= 0) {
      return <Loading />
    }
    let date = this.state.prices[0]
    let open = this.state.prices[1]
    let high = this.state.prices[2]
    let low = this.state.prices[3]
    let close = this.state.prices[4]
    let volume = this.state.prices[5]
    let exDividend = this.state.prices[6]
    let splitRatio = this.state.prices[7]
    let changeNum = parseFloat (Math.round(this.state.prices[4] - this.state.prices[1]) * 100/100).toFixed(2)
    let change = changeNum
    let quantity = this.state.quantity
    let trend = ''
    let value = quantity * close
    change >= 0 ? trend += 'up' : trend += 'down'
    return (
      <div className='data-container'>
        <table>
          <tbody className='table-body'>
          <tr>
            <th className='ticker'><Link to={`/details/${this.state.ticker}`}>{this.state.ticker}</Link></th>
            <th className='open'><Link to={`/details/${this.state.ticker}`}>{open}</Link></th>
            <th className='close'><Link to={`/details/${this.state.ticker}`}>{close}</Link></th>
            <th className='high'><Link to={`details/${this.state.ticker}`}>{high}</Link></th>
            <th className='low'><Link to={`details/${this.state.ticker}`}>{low}</Link></th>
            <th className='trend'><Link to={`details/${this.state.ticker}`}>{trend}</Link></th>
            <th className='sell'>
              <form onSubmit={this.removeFromPortfolio}>
                <button className='sell-button' type='submit' />
              </form>
            </th>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

Data.PropTypes = {
  keyword: React.PropTypes.string,
  removeStock: React.PropTypes.function
}

module.exports = Data
