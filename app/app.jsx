var React = require("react");
var ReactDOM = require("react-dom");
// Object Destructuring Syntax ES6 Feature
var {Provider} = require("react-redux");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

import TodoApp from "TodoApp";
import Login from "Login";

var actions = require("actions");
var store = require("configureStore").configure();
var TodoAPI = require("TodoAPI");

store.dispatch(actions.startAddTodos());

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
		// todoapp and all its component now can access store
	<Provider store={store}> 
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp}/>
				<IndexRoute component={Login}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById("app")
);