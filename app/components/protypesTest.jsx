var React = require('react');
var ProductBox = React.createClass({
    getDefaultProps: function () {
        return {
            name: "string name"
        }
    },

    propTypes: {
        title: React.PropTypes.any.isRequired,
        name: React.PropTypes.string.isRequired,
    },

    render: function () {
        return <h1>{this.props.title}{this.props.name}</h1>
    }

});

module.exports = ProductBox;