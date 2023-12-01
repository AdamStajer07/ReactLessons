import React, { Component } from 'react'
import PureComp from './PureComponent';
import RegComp from './RegularComponent';
import MemoComp from './MemoComponent';

class ParentComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Adam'
        }
      }
  
      componentDidMount() {
          setInterval(() => {
              this.setState({
                  name: 'Adam'
              })
          }, 2000);
      }
  render() {
    console.log('***Parent Comp***')
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
      
    )
  }
}

export default ParentComp