import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: ''
      }
    }
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlerCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }
    handlerTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit = (e) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handlerCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handlerTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    )
  }
}

export default Form