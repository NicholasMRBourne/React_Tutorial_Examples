# 8 rock solid examples to get you started in React

React is pioneering front end development. A marvellous library written by Facebook, it is becoming a standard for front end interfaces. React uses JSX which is a transpiler that enables you to write HTML like code coupled with Javascript. Something that it's also critically appraised for is it's Virtual DOM, which makes it super fast, and, provides a unique programming model. React really presents itself with some interesting concepts, and is most certainly an enjoyable way to build elegant interfaces, hopefully I uncover the secrets of React you've been waiting to know about!

**Let's go over a brief overview of what you'll be learning:**

- Transpile JSX to plain React in gulp and browserify
- Set up a basic React component.
- Render views with the JSX transformer.
- Write interactive functions in React components.
- Nest components and pass properties in idiomatic patterns.

You can also view the source code for all the examples on github at: https://github.com/Chris-Cates/React_Tutorial_Examples You can also view the demos at http://react-examples.chriscates.ca/

## Transpiling JSX to React with browserify

You must be wondering? What is Browserify? Browserify is simple really, it allows you to require npm packages in your javascript. You can transform and include npm packages and also transpile React code with it.

You definitely do not want to write your React code in plain React. React without JSX is frustrating and annoying. It is not an elegant way to write code. Hence why I will explain to you how to transpile JSX to plain React!

The following is a quick gulp recipe to easily transpile your JSX to plain React.

``` javascript
//gulpfile.js
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
//compile javascript with browserify then put it in the root directory
gulp.task('b', function() {
  gulp.src('./js/app.js')
    .pipe(browserify({
       insertGlobals : true,
       transform: [
         reactify
       ]
     }))
     .pipe(gulp.dest('./'))
});
//Watch and update for changes
gulp.task('w', function() {
  gulp.watch('./js/app.js', ['b']);
})

gulp.task('default', ['b', 'w']);
```

*Note how we use the reactify package to help transpile React code.*

This gulp task will enable us to write code in our js/app.js file and, update the root app.js file.

### Adding a html page to run the React code.

This will be one page in the root directory that hosts the React code.

``` html
<!-- index.html -->
<!DOCTYPE HTML>
<html>
  <body>
    <div id="app"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

Your file and folder structure should look like this

``` 
/index.html
/js/app.js
/app.js (the compiled app.js script)
/gulpfile.js
```



## Setting up a basic React component

React was designed to work as a component or component with components inside of them. This enables your views to be stateful and atomically structured. Naturally you will be passing variables to them and each and every component will act differently according to the state that is passed to it as props or state variables or functions.

In order to write a React component, you must use the `.createClass()` function in React.

``` javascript
//This is a React component... but it doesn't do anything
var Component = React.createClass({});
```

**ALWAYS remember that your components must start with a CAPITAL, or else it will not render.**

There are four major functions to a component.

1. `componentDidMount()`: This is a function that runs once the component is rendered in the view.
2. `componentWillUnmount()`: This is a function that runs once the component is destroyed or removed from the view.
3. `getInitialState()`: A return function, this sets the state by creating a JSON object.
4. `render()`: A return function as well, this returns JSX for the React to transpile to HTML.

Let's start with `render()` since it *renders* HTML. The following will generate *Hello world!* in `<h1>` tags.

``` javascript
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
```

![Example 1](http://i.imgur.com/rhcF767.png)

Notice how in your javascript code, you can write HTML syntax, and, also notice how your components are treated like HTML tags too? This is all transpiled by the JSX transformer.

### Using the JSX Transformer

The JSX transformer has a plethora of utility functions and methods, but, we'll briefly touch on some basics first. The JSX transformer can bind properties (props) to the component when rendering as well. Props are simply defined the same way as *attributes* are like in HTML. The perks of this is that you can propagate functions into them as well. For now we will just propagate text into a prop.

``` javascript
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
```

![Example 2](http://i.imgur.com/KRsH344.png)

The above will render 'Hello props!' in a header tag. You can also bind objects and reference them in the Component! Did you notice you can embed javascript objects with `{}`. You can even run certain Javascript functions in JSX (something we'll touch on later).

Let's move onto state, state cannot be passed like props, and, they stay only within the component, unless a component is nested and we pass the state of the parent component to the child (Something to also keep in mind for later).

``` javascript
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
```

![Example 4](http://i.imgur.com/Sf20nOX.png)

As you can imagine from the previous examples, this example will render 'Hello state!'. You can also bind and reference objects within the Components state. Formally if you want to set new state, you use the `this.setState()` function.

Here's another example to illustrate how each function works:

``` javascript
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
```

![Example 4](http://i.imgur.com/6Ca48fe.png)

## Writing interactive functions

Interacting with Components is actually surprisingly easy. React Components inherit a lot of functionality from HTML attributes such as `onClick` and `onChange` and so on.

### A simple button counter

Writing a function in a Component is easy. The following will illustrate a button counter in a React component.

``` javascript
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
```

![Example 5](http://i.imgur.com/F2uualo.png)

As you can see, React reduces the amount you have to code and you have to write to make a *stateful* button counter, allowing you to store and traverse data in a clearer and simpler way using JSX.

We will be moving forward with more complex patterns, assuming you have understood the above clearly.

## More complex patterns

### A simple todo list

We will be utilizing `.map()` that is transpiled in a React Component. We will also be passing data on the `onClick` and `onChange` function.

``` javascript
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
```

![Example 6](http://i.imgur.com/B8MIqXP.png)

There's some things you need to keep in mind with this snippet.

First is that in order to update inputs, you need to set it's state with an `onChange` event. You pass `e` which is the event in the arguments of the function. And then you set the inputs value with `this.setState()`. **The input will NOT work, unless you do this.**

I highly recommend you read up on Forms in React to get a better understanding of handling state for inputs: [https://facebook.github.io/react/docs/forms.html](here).

Second, if you want to map data effectively in JSX. You need to use the `.map()` function. Nest a return statement within the `.map()` function when needed.

### Nesting Components

Nesting Components are critical for mutable data. We can delegate properties to nested Components, and, even nest it within `.map()` functions.

The following illustrates how to nest Components with the `.map()` function.

``` javascript
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
```

![Example 7](http://i.imgur.com/8n9qYYc.png)

This will return 'One', 'Two', 'Three' and 'Sixty Nine' in a list. Your nested component is treated like a HTML tag, so it's very simple to traverse large datasets and delegate data to other components.

### Components interacting with each other

There are certain ways you can have Components interacting with each other, you can do it by passing functions as properties. It's a pretty simple trick, but, also super handy. It requires using the `.bind()` function, and, then passing an instance of `this` (the Component) and then the properties you want to send.

The following will illustrate how to have a Component with a nested Component interact with each other.

``` javascript
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
```

![Example 8](http://i.imgur.com/777UNYq.png)

Clicking on the button inside the nested Component will update the parent with the message!

## Conclusion

Completing this tutorial, I hope that you are now able to solve complex problems with React. A Redux tutorial on more complex concepts that includes React is currently in the pipeline, and, your skills with React will be invaluable for it.

If you have any questions or concerns, please tweet me at @itsChrisCates or email me at codeviolet@chriscates.ca

— Cheers, Chris Cates



