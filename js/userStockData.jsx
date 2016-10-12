const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

class Data extends React.component{
  constructor(props){
    super(props)
    
    this.state = {
      name: "",
      ticker: "",
      quantity: 0,
      value:0,
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
}