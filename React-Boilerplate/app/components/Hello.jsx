var React = require('react');
var ReactDOM = require('react-dom');

var hello = React.createClass({ 
    render: function() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}); 

module.exports = hello