var React = require("react");
var ReactDOM = require("react-dom");
// Object Destructuring Syntax ES6 Feature
var {Provider} = require("react-redux");
var {hashHistory} = require("react-router");

var actions = require("actions");
var store = require("configureStore").configure();
import firebase from "app/firebase/";
import router from "app/router/";

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		hashHistory.push("/todos");
	}
	else {
		hashHistory.push("/");
	}
});

store.dispatch(actions.startAddTodos());

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
		// todoapp and all its component now can access store
	<Provider store={store}> 
		{router}
	</Provider>,
	document.getElementById("app")
);