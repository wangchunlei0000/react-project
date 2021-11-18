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
    const doneNum = listData.reduce((pre, cur)=>{return pre + Number(cur.done)},0)
    const checked = (doneNum !==0) && (doneNum === listData.length)
    return (
      <div className="footer-wrapper">
        <div>
          <input type="checkbox" className="ckb" checked={checked} onChange={this.changeChecked}/>
          <span className="status">已完成 <span className="checked">{doneNum}</span> / 全部 <span className="all">{listData.length}</span></span>
        </div>
        <button className="delete-button" onClick={this.deleteDoneData}>删除已选的任务</button>
      </div>
    )
  } 
}
