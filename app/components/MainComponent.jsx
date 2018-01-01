var React = require('react');


var MainComponent = React.createClass({
    render: function () {
        return (
            <div>
                <div >
                    <div >
                        <p> MainComponent</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MainComponent;