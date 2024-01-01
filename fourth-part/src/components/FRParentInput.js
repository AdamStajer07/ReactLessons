import React, { Component, createRef } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = ()=>{
        this.inputRef.current.focus()
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default FRParentInput