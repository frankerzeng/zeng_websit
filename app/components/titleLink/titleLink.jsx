var React = require('react');
var $ = require('jquery');
var titleLink = React.createClass({
    getInitialState: function () {
        return {
            data: ""
        };
    },

    componentDidMount: function () {
        var url = "http://la.cn/resource";
        var a = $.get(url, function (resp) {
            console.log("-------");
            console.log(resp);
            if (this.isMounted()) {
                this.setState({
                    data: resp[0]
                });
            }
        }.bind(this))
    },

    render: function () {
        return (
            <ul className="nav navbar-nav">
                <li className="active">
                    <a href="#">{this.state.data}</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>

                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>

                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>

                        <li className="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
});


module.exports = titleLink;