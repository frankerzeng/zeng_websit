var React = require('react');
var ProductBox = React.createClass({
    getInitialState: function() {
        return {userInput: ''};
    },
    handleChange: function(e) {
        this.setState({userInput: e.target.value});
    },
    clearAndFocusInput: function() {
        this.setState({userInput: ''}, function() {
            // This code executes after the component is re-rendered
            this.refs.theInput.focus();
        });
    },
    render: function() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});

module.exports = ProductBox;