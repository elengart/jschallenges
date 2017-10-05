var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Hello');

// 
var firstName = "Elena";
var msg = "Wellness Coach";
ReactDOM.render(
        <Greeter name={firstName} msg={msg}/>,
        document.getElementById("app")
    );