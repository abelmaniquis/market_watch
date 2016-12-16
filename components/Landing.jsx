const React = require('react');
const Data = require('./Data');
const Header = require('./Header');
const {object,string} = React.PropTypes;
const {connector} = require('./Store');
const { Link } = require('react-router');
const Description = require('./Description.jsx');
const Anime = require('react-anime').default;
const {Button, Segment} = require('semantic-ui-react');

const Landing = () =>{
    return (
      <div className='home-info'>
        <div className='logo'>
        
          <Anime easing="easeOutElastic"
              direction="alternate"
              loop={true}
              delay={(el,index)=>{index*240}}
              translateX='13rem'
              scale={[.75, .9]}>
            <div className="blue"/>
            <div className="green"/>
            <div className="red"/>
          </Anime>
        
        </div>
        
        <h1 className='title'>MarketSource</h1>
        <div className='buttonContainer'>
        
        <fieldset>
       
       <ul>
        <li>
          <form action="/signup">
          <Button className='submitButton' type="submit">Register</Button>
          </form>
        </li>
        
        <li>
          <form action="/login">
          <Segment inverted>
            <Button inverted color="red" className='submitButton' type="submit">Log in</Button>
          </Segment>
          </form>
        </li>
        </ul>
       
        </fieldset>
        
        </div>
        
      </div>
    )
}

module.exports = connector(Landing)