import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <Search />
        <List />
      </div>
    )
  }
}
