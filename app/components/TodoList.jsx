var React = require("react");
var Todo = require("Todo");

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var returnTodos = () => {
            return todos.map((todo) => {
                return <Todo key={todo.id} {...todo}/>
            });
        };

        return (
            <div>
                {returnTodos()}
            </div>
        );
    }
});

module.exports = TodoList;