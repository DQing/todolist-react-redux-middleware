import React from 'react';
import {render} from 'react-dom';
import AddTodo from './containers/add-todo'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'
import VisibleTodoList from './containers/visible-todolist'

const store = createStore(reducer);

class App extends React.Component {
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