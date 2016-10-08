var _Pagination = require('antd/lib/Pagination');

var React = require('react');
var $ = require('jquery');
require('antd/dist/antd.css');

var Page = React.createClass({

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
            <_Pagination defaultCurrent={1} total={50} />
        );
    }
});


module.exports = Page;