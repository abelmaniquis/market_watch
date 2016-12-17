const React = require('react');
const Data = require('./Data');
const Header = require('./Header');
const {object,string} = React.PropTypes;
const {connector} = require('./Store');
const { Link } = require('react-router');
const Description = require('./Description.jsx');
const Anime = require('react-anime').default;
const {Button, Segment, Icon} = require('semantic-ui-react');

const SlideShow = require('./SlideShow')

const Landing = () =>{
    return (
      <div className='home-info'>
      
        <h1><Icon name='dollar' size='large' /></h1>
        
        <h1 className='title' id='frontTitle'>MarketSource</h1>
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