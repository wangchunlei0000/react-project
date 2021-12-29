import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName="active-style" to={ this.props.to } className="nav-item">{ this.props.name }</NavLink>
    )
  }
}
