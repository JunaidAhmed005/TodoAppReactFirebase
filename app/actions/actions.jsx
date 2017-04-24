import firebase, {firebaseRef} from "app/firebase/index";
import moment from "moment";

// SetSearchText action generator
export var setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
};

// AddTodo action generator
export var addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        todo
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        var todoRef = firebaseRef.child("todos").push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
}

// AddTodos action generator
export var addTodos = (todos) => {
    return {
        type: "ADD_TODOS",
        todos
    };
};

// ToggleShowCompleted action generator
export var toggleShowCompleted = () => {
    return {
        type: "TOGGLE_SHOW_COMPLETED"
    };
};

// ToggleTodo action generator
export var toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    };
};
