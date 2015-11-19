var React = require('react');
var ReactDOM = require('react-dom');

//This example allows you to update a parent Component within a child Component.
var NestedComponent = React.createClass({
  render: function() {
    return(
      <button onClick={this.props.updateParent}>Update my parent</button>
    )
  }
});

var Component = React.createClass({
  getInitialState: function() {
    return {
      message: 'Initial message!'
    }
  },
  updateParent: function() {
    this.setState({message: 'Ive been updated!'});
  },
  render: function() {
    return(
      <div>
      	<p>{this.state.message}</p>
        <NestedComponent updateParent={this.updateParent}/>
      </div>
    )
  }
});

ReactDOM.render(
  <Component/>, document.querySelector('#app')
);
