import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {

  state = {
    users: [],
    status: 'first'
  }

  // 订阅消息
  componentDidMount() {
    this.token = PubSub.subscribe('listData', (_, data) => {
      this.setState(data)
    })
  }
  //取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { status, users } = this.state
    return (
      <div className="search-list-wrapper">
        {
          status === 'first' ? <h2>请输入关键字进行搜索</h2> :
          status === 'loading' ? <h2>Loading...</h2> :
          status === 'error' ? <h2>o...it is wrong</h2> :
          users.map(item => {
            return (
              <div key={ item.id } className='search-item-wrapper'>
                <div className='item-content'>
                  <img src={ item.avatar_url } alt="profile" />
                  <span>{ item.login }</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
