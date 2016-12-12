
const React = require('react');
const d3 = require('d3');
const axios = require('axios');

class VisualData extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log("this.props.data: ",this.props.data);
    var x = d3.scaleLinear()
    .domain([0, d3.max(this.props.data)])
    .range([0, 1000]);
    
    d3.select(".chart")
    .selectAll("div")
    .data(this.props.data)
    .enter()
    .append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
    
    return(
      <div>
      <div className="chart"/>
      </div>
    )
    
  }
  
  
}

module.exports = VisualData