var React = require('react');
var React1 = require('react-dom');

var TitleLink = require('./components/titleLink/titleLink.jsx');
var Chapter = require('./components/chapter/chapter.jsx');

React1.render(<TitleLink />, document.getElementById('titleLinkId'));
React1.render(<Chapter />, document.getElementById('chapterId'));