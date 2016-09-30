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
            <li>
                <li class="active">
                    <a href="#">{this.state.data}</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
            </li>
        );
    }
});


module.exports = titleLink;