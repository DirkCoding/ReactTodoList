import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <input
        className="form"
        placeholder="Enter Items"
        onKeyUp={this.props.value}
      />
    )
  }
}

export default Input
