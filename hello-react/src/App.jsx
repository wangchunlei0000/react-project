import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class App extends Component {

  state = {
    users: []
  }

  saveUsers = (users) => {
    this.setState({ users })
  }

  render() {
    return (
      <div className="app-wrapper">
        <Search saveUsers={ this.saveUsers }/>
        <List users={ this.state.users }/>
      </div>
    )
  }
}
