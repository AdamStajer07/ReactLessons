import React, { Component } from 'react'

class ClickCounter2 extends Component {
  render() {
    console.log('Counter2')
    const {count, incrementCount} = this.props 
    return (
      <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounter2