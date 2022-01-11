import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    // console.log('------Home 接收到的 props-----', this.props)
    return (
      <div className='home-wrapper'>
        <div className="home-header">
          Home 组件的内容展示
        </div>
        <div className="home-nav">
          <MyNavLink className="nav-item" to="/home/news">News</MyNavLink>
          <MyNavLink className="nav-item" to="/home/message">Message</MyNavLink>
        </div>
        <Switch>
          <Route path="/home/news" component={ News }/>
          <Route path="/home/message" component={ Message }/>
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    )
  }
}

