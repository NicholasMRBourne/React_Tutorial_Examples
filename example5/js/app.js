var React = require('react');
var ReactDOM = require('react-dom');

//This Component will increase a button counter by one everytime the button is pressed.
var Component = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  buttonPressed: function() {
    this.setState(
      {count: this.state.count + 1}
    );
  },
  render: function() {
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.buttonPressed}>Click me!</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Component/>, document.querySelector('#app')
);
