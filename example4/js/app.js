var React = require('react');
var ReactDOM = require('react-dom');

//This will generate the text 'bar', console.log('Component Mounted)
//and also console.log('Component Unmounted') on it's removal.
var Component = React.createClass({
  getInitialState: function() {
  	return {
      foo: 'bar'
    }
  },
  componentDidMount: function() {
    console.log('Component Mounted');
  },
  componentWillUnmount: function() {
    console.log('Component Unmounted');
  },
  render: function() {
    return(
      <h1>{this.state.foo}</h1>
    )
  }
});

ReactDOM.render(
  <Component/>, document.querySelector('#app')
);
