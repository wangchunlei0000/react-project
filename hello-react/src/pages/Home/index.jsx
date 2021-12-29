import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    // console.log('-----------', this.props)
    return (
      <div>Homehhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
    )
  }
}

/**
    history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    location:
        pathname: "/home"
        search: ""
        state: undefined
    match:
        params: {}
        path: "/home"
        url: "/home"
 */