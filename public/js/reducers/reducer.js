export default function reducer(state = {todos: []}, action) {
    "use strict";
    switch (action.type) {
        case 'DELETE':
            const index = state.todos.indexOf(state.todos.find(t => t.id === action.id));
            state.todos.splice(index, 1);
            // return {todos: []};
            return {
                todos: [...state.todos]
            };

        case 'SETFILTERNAME':
            return {
                filterName: action.filterName
            }
        case 'GETTODOS':
            return {
             todos:action.todos
            }
        case '':
            return {
            todos:[...state.todos]
            }
    }
    return state;
}