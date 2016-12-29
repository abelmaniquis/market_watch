const React = require('react')
const d3 = require('d3')

class VisualData extends React.Component {
  
  render () {
    var lineData = []
    
    for(var i = 0; i < 6; i++){
      lineData.push({x: i, y: this.props.data[6 - i]})
    };
    
    
    console.log('lineData',lineData)
    var vis = d3.select('.chart'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,  
      right: 20,
      bottom: 20,
      left: 50
    }
    
    var parseTime = d3.timeParse("%d-%b-%y"),
    
    //originally d3.scaleLinear()
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
  .attr('class', 'xAxis')
  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
  .call(xAxis);

vis.append('svg:g')
  .attr('class', 'yAxis')
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
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .attr('fill', 'none'); 

    return(
      <div>
      <h4>{this.props.dataName}</h4>
        <svg className='chart' width='1000' height='500'/>
      </div>
    )
  }
}

VisualData.propTypes = {
  data: React.PropTypes.array
}

module.exports = VisualData
