import React, { Component } from 'react'
import { Link, Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
export default class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="app-header">React Router Demo</div>
        <div className="app-body">
          <div className="nav">
            {/* 在 React 中靠路由链接实现切换组件 -- 编写路由链接 */}
            <Link to="/home" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
          </div>
          <div className="content">
            {/* 注册路由 */}
            <Routes>
              <Route path="/home" element={ <Home/> }/>
              <Route path="/about" element={ <About/> }/>
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}
