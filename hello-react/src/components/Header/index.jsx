import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addListData: PropTypes.func.isRequired
  }
  keyUp = (e) => {
    const { keyCode, target } = e
    if(target.value.trim() === '') return
    if(keyCode === 13) {
      const data = { id: nanoid(), name: target.value, done: false }
      this.props.addListData(data)
      target.value = ''
    }
  }
  render() {
    return (
      <div>
        <input className="header-input" type="text" placeholder="请输入你的任务，按回车确认" onKeyUp={ this.keyUp }/>
      </div>
    )
  }
}
