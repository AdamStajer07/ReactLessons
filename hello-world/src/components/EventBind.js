import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   First aproach
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Button clicked'
    //     })
    // }

    // Second aproach
    clickHandler = ()=>{
        this.setState({
            message: 'Button clicked'
        })
    }
  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Click me</button>
        </div>
    )
  }
}

export default EventBind