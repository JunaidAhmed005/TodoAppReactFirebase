var React = require("react");

var Todo = React.createClass({
    handleToggle: function(){
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed} = this.props;
        return ( 
            // <div onClick={()=> {
                //this.props.onToogle(id);
            //}}>
            <div onClick={this.handleToggle}> 
                <input type="checkbox" checked={completed}/>{text}
            </div>
        );
    }
});

module.exports = Todo;