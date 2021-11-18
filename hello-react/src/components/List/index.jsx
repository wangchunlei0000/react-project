import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    updateListData: PropTypes.func.isRequired
  }
  render() {
    const { listData, updateListData, deleteListData } = this.props
    return (
      <div>
        {
          listData.map(item => {
            return <Item onClick={this.deleteItem} { ...item } key={ item.id } updateListData={updateListData} deleteListData={deleteListData}/>
          })
        }
      </div>
    )
  }
}
