import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = () => {
    const { inputElement: { value: keyword } } = this
    // 发送请求前更新通知 List 更新状态
    PubSub.publish('listData', {status: 'loading'})
    axios.get(`/api1/search/users?q=${keyword}`, keyword).then(
      res => {
        PubSub.publish('listData', { users: res.data.items, status: 'success' })
      },
      error => {
        PubSub.publish('listData', { status: 'error'})
      }
    )
  }
  render() {
    return (
      <div className='search-input-wrapper'>
        <input ref={c => this.inputElement = c} type="text" placeholder='输入内容搜索'/>
        <button onClick={ this.search }>搜索</button>
      </div>
    )
  }
}
