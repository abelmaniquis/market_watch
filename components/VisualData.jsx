
const React = require('react');
const d3 = require('d3')


class VisualData extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    console.log("This one is from VisualData");
    console.log(this.props.data);
    console.log(d3);
    
    var x = d3.scaleLinear()
    .domain([0, d3.max(this.props.data)])
    .range([0, 420]);
    
    console.log("x", x);
    
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