var React = require('react');
var React1 = require('react-dom');

var AppComponent = require('./components/productBox.jsx');
var Input = require('./components/input.jsx');
var DataFlow = require('./components/DataFlow.jsx');
var TickTock = require('./components/mixins.jsx');
var ProtypesTest = require('./components/protypesTest.jsx');

React1.render(<AppComponent />, document.getElementById('content'));
React1.render(<Input />, document.getElementById('input'));
React1.render(<DataFlow items={["apple", "Banana"]}/>, document.getElementById("test"));
React1.render(<TickTock data="adta"/>, document.getElementById('example'));
React1.render(<ProtypesTest title={datatitle}/>, document.getElementById('protypesTest'));