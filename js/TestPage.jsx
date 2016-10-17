const React = require('react')
const Redux = require('redux')
const ReactDOM = require('react-dom')
const ReactRedux = require('react-redux')
const uuid = require('uuid')
const {createStore,bindActionCreators} = Redux;
const {Provider,connect} = ReactRedux;
const {render} = ReactDOM;

// Dummy data for app
const attendeeList = [];

/* --- COMPONENTS --- */
class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>Test Elements</h1>
            </div>
        )
    }
}

module.exports = Test;