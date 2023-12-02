import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Adam'
      }
    console.log('LCA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LCA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LCA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LCA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('LCA getSnapshotBeforeUpdate')
        return true

    }
    componentDidUpdate() {
        console.log('LCA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Jan'
        })
    }
  render() {
    console.log('LCA render')
    return (
      <div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA