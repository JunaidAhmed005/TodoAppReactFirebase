var React = require("react");
var ReactDOM = require("react-dom");
// Object Destructuring Syntax ES6 Feature
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require("TodoApp");

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
	<TodoApp/>,
	document.getElementById("app")
);