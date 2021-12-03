import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Application extends Component {
  click = () => {
    console.log(123);
  }
  render() {
    return (
      <div>
        Application
        <button onClick={this.click}>button</button>
      </div>
    )
  }
}