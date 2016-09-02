var React = require('react');
var $ = require('jquery');
var Ajax = React.createClass({
    getInitialState: function () {
        return {
            value: "hhhhhhh",
            selectValue: "b"
        };
    },

    handleChange: function (event) {
        console.log('event-');
        console.log(event);
        console.log("attribute-");
        console.log(event.target.getAttribute("value"));
        this.setState({value: event.target.value})
    },
    handleChangeSelect(event){
        this.setState({value: event.target.value});
    },

    render: function () {
        var value = this.state.value;
        var selectValue = this.state.selectValue;
        return (
            // input 的value是受控组件，只能通过react来更改
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <select value={selectValue} onChange={this.handleChangeSelect}>
                    <option value="a"> a</option>
                    <option value="b"> b</option>
                </select>

            </div>
        );
    }
});


module.exports = Ajax;