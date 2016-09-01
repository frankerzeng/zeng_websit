var React = require('react');
var $ = require('jquery');
var Ajax = React.createClass({
    getInitialState: function () {
        return {
            data: ""
        };
    },

    componentDidMount: function () {
        // var url = "https://api.github.com/users/octocat/gists";
        var url = "http://la.cn/resource";
        // var url = "https://www.baidu.com";
        var a = $.get(url, function (resp) {
            console.log("-------");
            console.log(resp);
            if (this.isMounted()) {
                this.setState({
                    data: resp[3]
                });
            }
        }.bind(this))
    },

    render: function () {
        return (
            <div>
                laravel ajax {this.state.data}
            </div>
        );
    }
});


module.exports = Ajax;