import getTodos from './get-todos';
import addTodo from './add-todo';

export default store => next => action => {
    switch (action.type) {
        case 'GETTODOS':
            getTodos(next,action);
            break;
        case 'ADD' :
            addTodo(next,action);
            break;
    }
};