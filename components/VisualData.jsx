const React = require('react');
const d3 = require('d3');
const axios = require('axios');

class VisualData extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log("-------------------------------------");
    console.log("this.props.data: ",this.props.data);
    
    //http://stackoverflow.com/questions/21639305/d3js-take-data-from-an-array-instead-of-a-file
    
    var lineData = [{
      x:0,
      y:this.props.data[6]
    },{
      x:1,
      y:this.props.data[5],
    },{
      x:2,
      y:this.props.data[4],
    },{
      x:3,
      y:this.props.data[3]
    },{
      x:4,
      y:this.props.data[2]
    },{
      x:5,
      y:this.props.data[1]
    },{
      x:6,
      y:this.props.data[0]
    }];
    
    console.log("lineData: ",lineData);
    
    var vis = d3.select('.chart'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,  
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
      return d.x;
    }), d3.max(lineData, function(d) {
      return d.x;
    })]),
    yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
      return d.y;
    }), d3.max(lineData, function(d) {
      return d.y;
    })]),
    xAxis = d3.axisBottom()
      .scale(xRange),
    yAxis = d3.axisLeft()
      .scale(yRange)

vis.append('svg:g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
  .call(xAxis);

vis.append('svg:g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
  .call(yAxis);

var lineFunc = d3.line()
  .x(function(d){
    return xRange(d.x);
  })
  .y(function(d){
    return yRange(d.y);
  })
  .curve(d3.curveCardinal);

vis.append('svg:path')
  .attr('d', lineFunc(lineData))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
    return(
      <div>
      <h4>{this.props.dataName}</h4>
      <svg className="chart" width="1000" height="500"></svg>
      </div>
    )
    
  }
  
  
}

module.exports = VisualData