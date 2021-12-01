import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  static propTypes = {
    updateListData: PropTypes.func.isRequired
  }
  // 更新item的checkbox的值
  handleChange = id => {
    return e => {
      const { target: { checked } } = e
      this.props.updateListData(id, checked)
    }
  }
  // 删除listData中的某一项
  deleteItem = id => {
    this.props.deleteListData(id)
  }
  render() {
    const { id, name, done } = this.props
    return (
      <div className="item-wrapper">
        <div>
          <input type="checkbox" className="ckb" checked={ done } onChange={ this.handleChange(id) }/>
          <span className="task-name">{ name }</span>
        </div>
        <button className="delete-button" onClick={() => {this.deleteItem(id)}}>删除</button>
      </div>
    )
  }
}
