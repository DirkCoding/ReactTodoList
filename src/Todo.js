import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
  render() {
    const { onToggleDone, text, done, onDelete } = this.props
    return (
      <li>
        <span onClick={onToggleDone} className={done ? 'done' : ''}>
          {text}
        </span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}
export default Todo

// className={this.state.done ? 'done' : ''}
// onClick={toggleDone}>
