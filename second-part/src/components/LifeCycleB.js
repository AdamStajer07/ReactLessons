import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Adam'
      }
    console.log('LCB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LCB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LCB componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LCB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('LCB getSnapshotBeforeUpdate')
        return true
    }
    componentDidUpdate() {
        console.log('LCB componentDidUpdate')
    }
  render() {
    console.log('LCB render')
    return (
      <div>
        
      </div>
    )
  }
}

export default LifeCycleB