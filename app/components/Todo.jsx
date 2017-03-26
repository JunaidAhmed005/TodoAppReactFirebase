var React = require("react");
var moment = require("moment");

var Todo = React.createClass({
    handleToggle: function(){
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={this.handleToggle}> 
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;