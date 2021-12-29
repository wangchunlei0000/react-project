import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    const { name } = this.props
    return (
      <NavLink activeClassName="active-style" {...this.props} className="nav-item">{ name }</NavLink>
    )
  }
}
