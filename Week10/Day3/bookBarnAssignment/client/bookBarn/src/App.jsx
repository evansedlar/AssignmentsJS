import { Component } from 'react'
import './styles/App.css'
import BookList from './components/BookList'


class App extends Component {

  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const books = await response.json()
    this.setState({
      books: books
    })
  }

  render() {
    return (
      <>
        <BookList books = {this.state.books}/>
      </>
    )
  }
}


export default App


