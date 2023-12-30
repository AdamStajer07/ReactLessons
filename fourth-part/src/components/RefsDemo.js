import React, { Component } from 'react'

// The first aproach is commented
export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    //   this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbRef = (el) => {
        this.cbRef = el
      }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }
    
    eventHandler = () => {
        // alert(this.inputRef.current.value)

        alert(this.cbRef.value)
    }

  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputRef}/> */}
        <input type='text' ref={this.setCbRef}/>
        <button onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo