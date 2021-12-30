import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // 里面包含 children 属性 可以直接指定标签体内容
    console.log('this.props', this.props)
    return (
      // activeClassName 指定选中link时的active样式名称
      <NavLink activeClassName="active-style" {...this.props} className="nav-item"/>
    )
  }
}
