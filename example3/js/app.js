var React = require('react');
var ReactDOM = require('react-dom');

//The following will generate 'Hello state!'
var Component = React.createClass({
  getInitialState: function() {
    return {
      text: 'Hello state!'
    };
  },
  render: function() {
    return(
      <h1>{this.state.text}</h1>
    );
  }
});

ReactDOM.render(
  <Component/>, document.querySelector('#app')
);
