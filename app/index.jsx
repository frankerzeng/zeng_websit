import React from 'react';
var ReactDom = require('react-dom');
import {Router, Route, hashHistory} from 'react-router';

var TitleLink = require('./components/titleLink/titleLink.jsx');
var Chapter = require('./components/chapter/chapter.jsx');

// 导航
ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={TitleLink}/>
    </Router>
), document.getElementById('titleLinkId'));

// 卡片
ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Chapter}/>
    </Router>
), document.getElementById('chapterId'));