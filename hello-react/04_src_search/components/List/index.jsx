import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { status, users } = this.props
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
