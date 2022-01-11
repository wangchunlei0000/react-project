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
      this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
  }

  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
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
                  <Link to={`/home/message/detail/${id}/${title}`}>{ title }</Link>
                  &nbsp;&nbsp;<button onClick={() => {this.pushShow(id, title)}}>push view</button>&nbsp;&nbsp;
                  <button onClick={this.replaceShow(id, title)}>replace view</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* state 参数无需声明接收 */}
        <Route path="/home/message/detail/:id/:title" component={ Detail }/>
      </div>
    )
  }
}
