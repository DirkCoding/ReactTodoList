import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todo from './Todo'
import Counter from './Counter'
import './Input.css'

class App extends Component {
  state = {
    toDos: []
  }

  listItemDone = index => {
    const { toDos } = this.state
    const newToDos = [
      ...toDos.slice(0, index),
      { ...toDos[index], done: !toDos[index].done },
      ...toDos.slice(index + 1)
    ]

    this.setState({
      toDos: newToDos
    })
  }

  removeListItem = index => {
    const { toDos } = this.state
    const newTodos = [...toDos.slice(0, index), ...toDos.slice(index + 1)]
    this.setState({
      toDos: newTodos
    })
  }
  valueFromInput = event => {
    const { toDos } = this.state
    if (event.key === 'Enter') {
      const newToDos = [{ text: event.target.value, done: false }, ...toDos]
      this.setState({
        toDos: newToDos
      })
      event.target.value = ''
    }
  }
  render() {
    const cntDone = this.state.toDos.filter(item => item.done).length
    return (
      <section>
        <h1>Kim-Dirk's Todo List</h1>
        <Counter num={cntDone} />
        <Input value={this.valueFromInput} />
        <ul>
          {this.state.toDos.map((todo, index) => (
            <Todo
              key={index}
              text={todo.text}
              done={todo.done}
              onToggleDone={() => this.listItemDone(index)}
              onDelete={() => this.removeListItem(index)}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default App
