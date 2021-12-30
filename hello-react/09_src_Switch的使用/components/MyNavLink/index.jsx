import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // 里面包含 children 属性 可以直接指定标签体内容
    console.log('this.props', this.props)
    return (
      <NavLink activeClassName="active-style" {...this.props} className="nav-item"/>
    )
  }
}
