import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
         firstGreet: true
      }
    }
    
  render() {

    // FIRST APROACH
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Adam</div>
    // } else {
    //     message = <div>Welcome User</div>
    // }
    // return (<div>{message}</div>)
    
    // SECOND APROACH
    // if(this.state.isLoggedIn) {
    //     return (<div>Welcome Adam</div>)
    // } else {
    //   return (<div>Welcome User</div>)
    // }
    
    // THIRD APROACH
    return (        
        <div>
            {this.state.firstGreet && <div>It's your first greet?</div>}
            {this.state.isLoggedIn ?
            <div>Welcome Adam</div> :
            <div>Welcome User</div>}
        </div>

    )
  }
}

export default UserGreeting