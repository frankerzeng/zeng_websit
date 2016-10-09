var React = require('react');
var ReactDom = require('react-dom');

var TitleLink = require('./components/titleLink/titleLink.jsx');
var Chapter = require('./components/chapter/chapter.jsx');

ReactDom.render(<TitleLink />, document.getElementById('titleLinkId'));
ReactDom.render(<Chapter />, document.getElementById('chapterId'));