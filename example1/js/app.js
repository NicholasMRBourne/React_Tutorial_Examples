var React = require('react');
var ReactDOM = require('react-dom');

//This is a React component that will generate "Hello world!"
var Component = React.createClass({
  render: function() {
  	return(
      <h1>Hello world!</h1>
    );
  }
});

//ReactDOM will render the component in the #app div.
ReactDOM.render(
 <Component/>, document.querySelector('#app')
);
