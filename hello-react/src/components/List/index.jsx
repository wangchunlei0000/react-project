import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="search-list-wrapper">
        {
          this.props.users.map(item => {
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
