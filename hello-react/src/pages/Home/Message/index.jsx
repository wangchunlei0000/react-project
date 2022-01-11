import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr : [
      { id: '001', title: 'message001'},
      { id: '002', title: 'message002'},
      { id: '003', title: 'message003'}
    ]
  }
  replaceShow = (id, title) => {
    return () => {
      // replace 跳转 【params 参数】
      // this.props.history.replace(`/home/message/detail/${id}/${title}`)
      // replace 跳转 【search 参数】
      this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
      // 【state 参数】
      // this.props.history.replace(`/home/message/detail`, {id, title})
    }
  }

  pushShow = (id, title) => {
    // push 跳转 【params 参数】
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // push 跳转 【search 参数】
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    // 【state 参数】
    // this.props.history.push(`/home/message/detail`, {id, title})
  }
  goBack = () => {
    this.props.history.goBack()
  }
  goForward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(2)
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul className='message-wrapper'>
          {
            messageArr.map(({id, title}) => {
              return (
                <li key={id}>
                  {/* 向路由组件传递 state 参数 */}
                  {/* <Link to={`/home/message/detail/${id}/${title}`}>{ title }</Link> */}
                  <Link to={`/home/message/detail?id=${id}&title=${title}`}>{ title }</Link>
                  &nbsp;&nbsp;<button onClick={() => {this.pushShow(id, title)}}>push view</button>&nbsp;&nbsp;
                  <button onClick={this.replaceShow(id, title)}>replace view</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <button onClick={this.goBack}>goBack</button>
        <button onClick={this.goForward}>goForward</button>
        <button onClick={this.go}>go</button>

        {/* state 参数无需声明接收 */}
        <Route path="/home/message/detail" component={ Detail }/>
      </div>
    )
  }
}
