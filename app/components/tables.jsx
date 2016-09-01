var React = require('react');
var $ = require('jquery');
var Ajax = React.createClass({
    getInitialState: function () {
        return {
            value: "hhhhhhh"
        };
    },

    handleChange: function (event) {
        console.log('event-');
        console.log(event);
        this.setState({value: event.target.value})
    },

    render: function () {
        var value = this.state.value;
        return (
            // input 的value是受控组件，只能通过react来更改
            <input type="text" value={value} onChange={this.handleChange}/>
        );
    }
});


module.exports = Ajax;