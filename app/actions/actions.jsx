// SetSearchText action generator
export var setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
};

// AddTodo action generator
export var addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text
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
