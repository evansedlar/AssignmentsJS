import { Component } from "react"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContents"
import "./styles/App.css"

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(result => {
      this.setState({
        books: result
      })
    })
  }

  render() {
    return(
      <>
        <Navbar/>
        <MainContent books={this.state.books}/>
      </>
    )
  }
}


export default App
