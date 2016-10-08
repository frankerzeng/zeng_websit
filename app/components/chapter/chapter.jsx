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
        var item = [];
        for (var i = 0; i < 20; i++) {
            item.push(
                <div key={i}  style={{float: "left", padding: "10px 10px 0px 0px"}}>
                    <_Card title="标题快快快" extra={<a href="#">详情</a>} bordered={true} style={{width: 300}}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </_Card>
                </div>
            );
        }
        return (
            <div style={{background: '#ECECEC', padding: '30px', height: "inherit"}}>
                {item}
            </div>
        );
    }
});


module.exports = chapter;