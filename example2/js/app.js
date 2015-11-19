var React = require('react');
var ReactDOM = require('react-dom');

//The following will generate Hello props!
var Component = React.createClass({
  render: function() {
    return(
      <h1>{this.props.text}</h1>
    );
  }
});

ReactDOM.render(
  <Component text='Hello props!'/>, document.querySelector('#app')
);
