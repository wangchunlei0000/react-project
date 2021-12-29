import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink'
import Home from './pages/Home' // 路由组件
import About from './pages/About' // 路由组件
import './App.css'
export default class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="app-body">
          <div className="nav">
            {/* 在 React 中靠路由链接实现切换组件 -- 编写路由链接 */}
            <MyNavLink to="/home" name="Home"/>
            <MyNavLink to="/about" name="About"/>
          </div>
          <div className="content">
            {/* 注册路由 */}
            <Route path="/home" component={ Home }/>
            <Route path="/about" component={ About }/>
          </div>
        </div>
      </div>
    )
  }
}
