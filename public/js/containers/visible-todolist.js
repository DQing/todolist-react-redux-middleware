import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

class VisibleTodoList extends React.Component {

    render() {
        const todos = this.props.todos.map((todo, index) => {
            return <div key={index}>
                {todo.text}
                <button onClick={() => {this.props.onDelete(todo.id)}}>X</button>
            </div>
        })
        return <div>
            {todos}
        </div>
    }
}

VisibleTodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete:PropTypes.func.isRequired
}

const mapStateToProps = (state)=> {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onDelete: (id) => {
            dispatch({
                type:'DELETE',
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
