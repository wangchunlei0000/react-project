import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    const { inputElement: { value: keyword } } = this
    axios.get(`/api1/search/users?q=${keyword}`, keyword).then(
      res => {
        this.props.saveUsers(res.data.items)
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
