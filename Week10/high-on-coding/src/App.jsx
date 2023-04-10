import { Component, useState } from 'react'
import './App.css'
import Navbar from "./Navbar"
import Article from "./article"
import Post1 from "./Post1"
import Post2 from "./Post2"

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Article />
        <Post1 />
        <Post2 />
      </>
    )
  }
}

export default App
