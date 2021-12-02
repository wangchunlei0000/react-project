import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class App extends Component {

  state = {
    users: [],
    status: 'first'
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="app-wrapper">
        <Search updateAppState={ this.updateAppState }/>
        <List users={ this.state.users } status={ this.state.status }/>
      </div>
    )
  }
}
