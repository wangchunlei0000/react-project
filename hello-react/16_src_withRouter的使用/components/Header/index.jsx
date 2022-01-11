import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  goBack = () => {
    this.props.history.goBack()
  }
  goForward = () => {
    this.props.history.goForward()
  }
  render() {
    return (
      <div className="app-header">
        <span>React Router Demo</span>&nbsp;&nbsp;
        <button onClick={this.goBack}>goBack</button>&nbsp;&nbsp;
        <button onClick={this.goForward}>goForward</button>
      </div>
    )
  }
}

export default withRouter(Header)
