import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  changeChecked = (e) => {
    const { target: {checked} } = e
    if(checked) {
      this.props.allDone()
    } else {
      this.props.allTodo()
    }
  }
  deleteDoneData = () => {
    this.props.deleteDoneData()
  }
  render() {
    const { listData } = this.props
    const doneList = listData.filter(item => item.done)
    const checked = (doneList.length !==0) && (doneList.length === listData.length)
    return (
      <div className="footer-wrapper">
        <div>
          <input type="checkbox" className="ckb" checked={checked} onChange={this.changeChecked}/>
          <span className="status">已完成 <span className="checked">{doneList.length}</span> / 全部 <span className="all">{listData.length}</span></span>
        </div>
        <button className={`delete-button ${doneList.length ? 'visible': ''}`} onClick={this.deleteDoneData}>删除已选的任务</button>
      </div>
    )
  } 
}
