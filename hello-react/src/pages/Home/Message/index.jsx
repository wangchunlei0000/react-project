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

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul className='message-wrapper'>
          {
            messageArr.map(item => {
              return (
                <li key={item.id}>
                  {/* 向路由组件传递 search 参数 */}
                  <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* search 参数无需声明接收 */}
        <Route path="/home/message/detail" component={ Detail }/>
      </div>
    )
  }
}
