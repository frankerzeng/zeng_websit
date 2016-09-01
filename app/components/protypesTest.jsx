var React = require('react');
var ProductBox = React.createClass({

    propTypes: {
        title: React.PropTypes.any.isRequired,
    },

    render: function () {
        return <h1>{this.props.title}</h1>
    }

});

module.exports = ProductBox;