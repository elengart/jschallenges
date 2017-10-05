var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('Hello');

// test es6 syntax
var foo = {a: 'a', b: 'b'}
var foo1 = {c: 'c', ...foo };
console.log(foo1);

ReactDOM.render(
        <Hello />, document.getElementById("app")
);