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
                  {/* 向路由组件传递 params 参数 */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收 params 参数 */}
        <Route path="/home/message/detail/:id/:title" component={ Detail }/>
      </div>
    )
  }
}
