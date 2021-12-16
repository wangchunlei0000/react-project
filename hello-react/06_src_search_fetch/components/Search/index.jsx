import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = async () => {
    const { inputElement: { value: keyword } } = this
    // 发送请求前更新通知 List 更新状态
    PubSub.publish('listData', {status: 'loading'})
    //#region axios 发送请求
    // axios.get(`/api1/search/users2?q=${keyword}`, keyword).then(
    //   res => {
    //     PubSub.publish('listData', { users: res.data.items, status: 'success' })
    //   },
    //   error => {
    //     PubSub.publish('listData', { status: 'error'})
    //   }
    // )
    //#endregion
    
    // 使用fetch发送请求 (未优化)
    // promise
    // 1.then 指定的成功回调的返回值是 promise， 会作为整个 1.then 的返回值 可以继续链式调用 2.then
    // 如果失败的回调返回非 promise 值那么 .then 所返回的状态就是成功的，1.then 失败回调 会走到 2.then 的成功回调中
    // 所以在 1.then 的失败会调用返回一个 promise
    //#region 
    // fetch(`/api1/search/users2?q=${keyword}`).then(
    //   res => {
    //     return res.json()
    //   },
    //   () => {
    //     PubSub.publish('listData', { status: 'error'})
    //     // 中断 promise 链
    //     // return 一个初始化状态的 promise 实例
    //     return new Promise(() => {})
    //   }
    // ).then(
    //   res => {
    //     PubSub.publish('listData', { users: res.items, status: 'success' })
    //   },
    //   () => {
    //     PubSub.publish('listData', { status: 'error'})
    //   }
    // )
    //#endregion

    try {
      const result = await fetch(`/api1/search/users2?q=${keyword}`)
      const data = await result.json()
      PubSub.publish('listData', { users: data.items, status: 'success' })
    } catch (error) {
      PubSub.publish('listData', { status: 'error'})
    }
  
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
