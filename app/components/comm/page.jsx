var _Pagination = require('antd/lib/Pagination');

var React = require('react');

var Page = React.createClass({

    getInitialState: function () {
        return {
            data: ""
        };
    },

    onChange: function (page) {
        console.log('------------------page');
        console.log(page);
        this.props.onChangePage(page);
    },

    render: function () {
        console.log("--=======");
        console.log(this.props);
        return (
            <_Pagination total={this.props.page.total} pageSize={this.props.page.pageSize} onChange={this.onChange}/>
        );
    }
});


module.exports = Page;