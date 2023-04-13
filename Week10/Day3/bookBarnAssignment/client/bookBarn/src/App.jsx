import { useEffect, useState } from 'react'
import './styles/App.css'

function App() {

  const[books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const result = await response.json()
    setBooks(result)
  }

  const bookItems = books.map(book => {
    return <li key={book._id}>
      <b>{book.bookTitle}</b>
      <p>{book.bookGenre}</p>
      <p>{book.bookPublisher}</p>
      <img src={book.bookImageURL}/>
    </li>
  })

  return (
    <>
      <ul>{bookItems}</ul>
    </>
  )
}


export default App


