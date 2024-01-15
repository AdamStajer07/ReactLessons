import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
  render() {
    console.log('Hover2')
    const {count, incrementCount} = this.props
    return (
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounter2