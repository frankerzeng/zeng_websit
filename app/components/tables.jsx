var React = require('react');
var $ = require('jquery');
var Ajax = React.createClass({
    getInitialState: function () {
        return {
            value: "hhhhhhh",
            selectValue: "b"
        };
    },

    getDefaultProps(){
        return {
            foo: "11",
            key: 'ss'
        }
    },

    handleChange: function (event) {
        // other 用法
        var {value, ...other} = this.props;
        console.log("other=====");
        console.log(other);

        console.log('event-');
        console.log(event);
        console.log("attribute-");
        console.log(event.target.getAttribute("value"));
        console.log(this.props.foo);
        console.log('this.props.foo' + '======');
        console.log(this.props.key);
        console.log("test git push");
        this.setState({value: event.target.value})
    },

    render: function () {
        var value = this.state.value;
        var selectValue = this.state.selectValue;

        return (

            // input 的value是受控组件，只能通过react来更改
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <div> html 实体</div>
                <div> html 实体&middot;</div>
                <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}}/>
            </div>
        );
    }
});


module.exports = Ajax;