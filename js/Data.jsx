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
      keyword: this.props.keyword
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
    
    return (
      <div className="data-container">

      <table>
      <tbody>
        <tr>
          <th className='ticker'><Link to={'/details/:id'}>{this.state.ticker}</Link></th>
          <th className='open'>{this.state.prices[1]}</th>
          <th className='high'>{this.state.prices[2]}</th>
          <th className='low'>{this.state.prices[3]}</th>
          <th className='close'>{this.state.prices[4]}</th>
          <th className='onDate'>{this.state.prices[0]}</th>
        </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

module.exports = Data;