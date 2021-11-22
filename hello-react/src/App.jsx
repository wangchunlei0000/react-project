import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      res => {
        console.log('成功了 ', res.data)
      },
      err => {
        console.log('失败', err)
      })
  }
  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      res => { console.log('res-', res.data) },
      err => { console.log('err--', err) }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarData}>获取汽车数据</button>
      </div>
    )
  }
}
