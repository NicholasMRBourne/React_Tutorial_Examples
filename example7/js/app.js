var React = require('react');
var ReactDOM = require('react-dom');

//This example nests messages within it's parent Component.
var NestedComponent = React.createClass({
  render: function() {
    return(
      <li>My prop is: {this.props.message}</li>
    )
  }
});

var Component = React.createClass({
  getInitialState: function() {
    return {
      messages: ['One', 'Two', 'Three', 'Sixty Nine']
    }
  },
  render: function() {
    return(
      <div>
        <ul>
          {
            this.state.messages.map(function(message) {
              return(
            	  <NestedComponent message={message}/>
            	);
            })
          }
        </ul>
      </div>
    );
  }
})

ReactDOM.render(
  <Component/>, document.querySelector('#app')
);
