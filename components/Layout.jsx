const React = require('react')

const Layout = (props) =>{
  <div className='app-conainter'>
    {props.children}
  </div>
}

const { element } =React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
