// 组件间的通信（父元素向子元素传递）
var React = require('react');

var ProductBox = React.createClass({
    handleClick: function (i) {
        console.log('you clicked:' + this.props.items[i]);
    },

    render: function () {
        return (
            <div>
                {
                    this.props.items.map(function (item, i) {
                        return (
                            <div key={i} onClick={this.handleClick.bind(this, i)}>{item}</div>
                        );
                    }, this)
                }
            </div>
        )
    }
});

module.exports = ProductBox;