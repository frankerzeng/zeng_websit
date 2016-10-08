var React = require('react');
var React1 = require('react-dom');

var TitleLink = require('./components/titleLink/titleLink.jsx');
var Chapter = require('./components/chapter/chapter.jsx');
var Page = require('./components/comm/page.jsx');

React1.render(<TitleLink />, document.getElementById('titleLinkId'));
React1.render(<Chapter />, document.getElementById('chapterId'));
React1.render(<Page />, document.getElementById('pageId'));