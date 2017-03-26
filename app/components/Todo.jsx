var React = require("react");
var moment = require("moment");

var Todo = React.createClass({
    handleToggle: function(){
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? "todo todo-completed" : "todo";
        var renderDate = () => {
            var message = "Created ";
            var timestamp = createdAt;
            
            if(completed) {
                var message = "Completed ";
                var timestamp = completedAt;
                
            }

            return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
        };
        return ( 
            // <div onClick={()=> {
                //this.props.onToogle(id);
            //}}>
            <div className={todoClassName} onClick={this.handleToggle}> 
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;