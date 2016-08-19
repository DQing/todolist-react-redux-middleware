import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

class VisibleTodoList extends React.Component {

    render() {
        const todos = this.props.todos.map((todo, index) => {
            return <div key={index}>
                {todo.text}
            </div>
        })
        return <div>
            {todos}
        </div>
    }
}

VisibleTodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state)=> {
    "use strict";
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(VisibleTodoList);
