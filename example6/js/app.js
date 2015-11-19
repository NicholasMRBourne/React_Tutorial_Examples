var React = require('react');
var ReactDOM = require('react-dom');

//This Component generates a simple to do list with an unordered list.
var Component = React.createClass({
  getInitialState: function() {
    return {
      todo: [],
      newTodo: '',
    }
  },
  updateInput: function(e) {
    this.setState({
      newTodo: e.target.value
    });
  },
  submitted: function() {
    this.state.todo.push(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  },
  render: function() {
  	return(
      <div>
        <h1>My awesome todo list</h1>
        <ol>
          {
            this.state.todo.map(function(aTodo) {
              return (
                <li>{aTodo}</li>
              )
            })
          }
    		<li>{this.state.newTodo}</li>
        </ol>
        <input type="text" onChange={this.updateInput} value={this.state.newTodo}/>
        <button onClick={this.submitted}>Add</button>
      </div>
    );
  }
})

ReactDOM.render(
  <Component/>, document.querySelector('#app')
);
