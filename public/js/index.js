import React from 'react';
import {render} from 'react-dom';
import AddTodo from './containers/add-todo'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'
import VisibleTodoList from './containers/visible-todolist';
import addTodo from './middleware/add-todo';
import getTodos from './middleware/get-todos';

const createStoreWithMiddleware = applyMiddleware(getTodos,addTodo)(createStore);

const store = createStoreWithMiddleware(reducer);

class App extends React.Component {

    componentDidMount() {
        store.dispatch({type: "GETTODOS"});
    }

    render() {
        return <div>
            <AddTodo/>
            <VisibleTodoList />
        </div>
    }
}

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));