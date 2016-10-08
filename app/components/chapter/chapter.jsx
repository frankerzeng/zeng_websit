var _Card = require('antd/lib/card');

var React = require('react');
var $ = require('jquery');
require('antd/dist/antd.css');

var chapter = React.createClass({

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
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <_Card title="标题快快快" extra={<a href="#">详情</a>} bordered={true} style={{width: 300}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </_Card>
            </div>
        );
    }
});


module.exports = chapter;