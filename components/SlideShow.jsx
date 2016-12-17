const React = require('react')

const Images = ['./img/cityscape.jpg',
                './img/night-cty.jpg'
];


class SlideShow extends React.Component{
  constructor(props){
    super(props)
    this.forward = 0;
    this.backward = 1;
    this.fade = false
  }
  render(){
    return(
    
    <div className="show">
      <h1>This is where the slideshow goes</h1>
    </div>
    
    )
  }
}

module.exports = SlideShow