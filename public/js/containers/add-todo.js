import {connect} from 'react-redux'
import React,{PropTypes} from 'react'

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

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onAdd: (text) => {
            dispatch({type:'ADD',text})
        }
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(AddTodo);