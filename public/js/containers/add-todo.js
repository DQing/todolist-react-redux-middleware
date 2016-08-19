import {connect} from 'react-redux'

import React from 'react'

class AddTodo extends React.Component {
    add() {
        this.props.onAdd(this.refs.input.value);
    }
    render() {
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.add.bind(this)}>Add</button>
        </div>
    }
}

export default connect()(AddTodo);