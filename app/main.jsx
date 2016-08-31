var React = require('react');
var React1 = require('react-dom');

var AppComponent = require('./components/productBox.jsx');
var Input = require('./components/input.jsx');
var DataFlow = require('./components/DataFlow.jsx');

React1.render(<AppComponent />, document.getElementById('content'));
React1.render(<Input />, document.getElementById('input'));
React1.render(<DataFlow items={["apple","Banana"]}/>,document.getElementById("test"));