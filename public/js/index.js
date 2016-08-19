import React from 'react';
import {render} from 'react-dom';
import AddTodo from './containers/add-todo'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'

const store = createStore(reducer);

class App extends React.Component {
    onAdd(text){
        store.dispatch({type:'ADD',text})
    }
    render() {

        return <div>
            <AddTodo onAdd={this.onAdd} />
        </div>
    }
}

render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));