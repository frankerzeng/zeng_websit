var React = require('react');
var React1 = require('react-dom');

var AppComponent = require('./components/productBox.jsx');
var Input = require('./components/input.jsx');
var DataFlow = require('./components/DataFlow.jsx');
var TickTock = require('./components/mixins.jsx');
var ProtypesTest = require('./components/protypesTest.jsx');
var StateTest = require('./components/stateTest.jsx');
var RealDom = require('./components/realDom.jsx');
var Lifecycle = require('./components/Lifecycle.jsx');
var Ajax = require('./components/Ajax.jsx');
var Tables = require('./components/tables.jsx');

React1.render(<AppComponent />, document.getElementById('content'));
React1.render(<Input />, document.getElementById('input'));
React1.render(<DataFlow items={["apple", "Banana"]}/>, document.getElementById("test"));
React1.render(<TickTock data="adta"/>, document.getElementById('example'));
React1.render(<ProtypesTest title={123}/>, document.getElementById('protypesTest'));
React1.render(<StateTest />, document.getElementById('StateTest'));
React1.render(<RealDom />, document.getElementById('realDom'));
React1.render(<Lifecycle />, document.getElementById('Lifecycle'));
React1.render(<Ajax />, document.getElementById('Ajax'));

var multprops = {};
multprops.foo = ";";
multprops.bar = ";d";

React1.render(<Tables {...multprops} foo="sd"/>, document.getElementById('tables'));