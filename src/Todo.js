import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onToggleDone}
        className={this.props.done ? 'done' : ''}
      >
        {this.props.text}
      </li>
    )
  }
}
export default Todo

// className={this.state.done ? 'done' : ''}
// onClick={toggleDone}>
