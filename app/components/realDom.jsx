var React = require('react');
var ProductBox = React.createClass({
    handleClick: function () {
        this.refs.myTextInput.focus();
    },

    render: function () {
        return (
            <div>
                <input type="text" ref="myTextInput"/>
                <input type="button" value="focus input" onClick={this.handleClick}/>
            </div>
        );
    }

});

module.exports = ProductBox;