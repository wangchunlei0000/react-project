import React, { Component } from 'react'
const qs = require('querystring')

const detailData = [
  { id: '001', content: 'hello wang' },
  { id: '002', content: 'hello chun' },
  { id: '003', content: 'hello lei' },
]

export default class Detail extends Component {
  render() {
    console.log('this.props.match.params', this.props)
    const { location: { search } } = this.props
    const { id, title } = qs.parse(search.substring(1))
    const findResult = detailData.find(item => {
      return item.id === id
    })
    return (
      <ul>
        <li>ID: { id } </li>
        <li>TITLE: { title }</li>
        <li>CONTENT: { findResult.content }</li>
      </ul>
    )
  }
}
