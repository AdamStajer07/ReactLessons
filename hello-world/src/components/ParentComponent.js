import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
    }        
    greetParent = (arg)=>{
        alert(`Hello ${this.state.parentName} from ${arg}`)
    }
  render() {
    return (
        <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
    )
  }
}

export default ParentComponent