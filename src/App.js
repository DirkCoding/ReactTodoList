import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todo from './Todo'

class App extends Component {
  state = {
    toDos: [
      /*
      { text: 'Kaffee', done: false },
      { text: 'Wurst', done: false },
      { text: 'Anrufen', done: false },
      { text: 'Bestellen', done: false }
    */
    ]
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
    return (
      <section>
        <h1>Kim-Dirk's toDo List</h1>
        <Input value={this.valueFromInput} />
        <ul>
          {this.state.toDos.map((todo, index) => (
            <Todo
              text={todo.text}
              done={todo.done}
              onToggleDone={() => this.listItemDone(index)}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default App
