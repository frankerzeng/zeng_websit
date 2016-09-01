var React = require('react');
var ProductBox = React.createClass({
    getInitialState(){
        return {
            liked: false
        }
    },
    getDefaultProps(){
        return {
            like: "d"
        }
    },

    handleClick: function () {
        console.log(";;;;;;" + "====" + this.props.like);
        this.setState({liked: !this.state.liked});
    },


    render: function () {
        var text = this.state.liked ? 'like' : 'dont liked';
        console.log(";;;;;;" + new Date().getTime() + "====" + this.props.like);
        return (
            <p onClick={this.handleClick}>
                you {text} this. click to toggle--{this.props.like}.
            </p>
        );
    }

});

module.exports = ProductBox;