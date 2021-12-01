import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './index.css'

export default class App extends Component {
  state = {
    listData: [
      { id: 1, name: '吃饭', done: true },
      { id: 2, name: '睡觉', done: false },
      { id: 3, name: '打代码', done: false }
    ]
  }
  // 添加listdata
  addListData = data => {
    const { listData } = this.state
    this.setState({ listData: [data, ...listData] })
  }
  // 更新listdata的值
  updateListData = (id, done) => {
    const { listData } = this.state
    const newListData = listData.map( item => {
      if(item.id === id) {
        return {...item, done}
      } else {
        return item
      }
    })
    this.setState({listData: newListData})
  }
  // 删除listdata中某一项
  deleteListData = id => {
    const { listData } = this.state
    const newListData = listData.filter(item => {
      return item.id !== id
    })
    this.setState({listData: newListData})
  }
  allDone = () => {
    const { listData } =this.state
    const newListData = listData.map(item => { 
      return {...item, done: true}
    })
    this.setState({ listData: newListData })
  }
  allTodo = () => {
    const { listData } =this.state
    const newListData = listData.map(item => { 
      return {...item, done: false}
    })
    this.setState({ listData: newListData })
  }
  deleteDoneData = () => {
    const { listData } = this.state
    const newListData = listData.filter(item => !item.done)
    this.setState({ listData: newListData })
  }
  render() {
    const { listData } = this.state
    return (
      <div className="app-wrapper">
        <Header addListData={ this.addListData }/>
        <List listData={ listData } updateListData={this.updateListData} deleteListData={this.deleteListData}/>
        <Footer listData={ listData } allDone={this.allDone} allTodo={this.allTodo} deleteDoneData={this.deleteDoneData}/>
      </div>
    )
  }
}
