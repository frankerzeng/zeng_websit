var React = require('react');
var _Card = require('antd/lib/card');
var $ = require('jquery');

var Page = require('../comm/page.jsx');

var chapter = React.createClass({

    getInitialState: function () {
        return {data: 10};
    },

    componentDidMount: function () {
        this.getData();
        // PubSub.subscribe('change page', this.onChangePage());
    },

    getData: function (param) {
        var url = "http://la.cn/resource";
        var a = $.get(url, function (resp) {
            console.log("-------chapter ajax");
            console.log(resp);
            if (this.isMounted()) {
                this.setState({
                    data: resp[0]
                });
            }
        }.bind(this));
    },

    onChangePage: function (page) {
        this.getData(page);
    },

    render: function () {
        var item = [];
        for (var i = 0; i < 20; i++) {
            var href = "/article?articleId=" + i;
            item.push(
                <div key={i} style={{float: "left", padding: "10px 10px 0px 0px"}}>
                    <_Card title="标题快快快" extra={<a href={href}>详情</a>} bordered={true}
                           style={{width: 300}}>
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
                <div style={{margin: "20px 0px 0px 0px", float: "left", width: "100%"}}>
                    <Page page={{pageSize: 20, total: this.state.data}} onChangePage={this.onChangePage}/>
                </div>
            </div>
        );
    }
});


module.exports = chapter;