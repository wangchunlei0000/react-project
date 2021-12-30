import React, { Component } from 'react'

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
export default class Home extends Component {
  render() {
    // console.log('------Home 接收到的 props-----', this.props)
    return (
      <div>Homehhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
    )
  }
}

