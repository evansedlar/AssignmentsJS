import { useEffect, useState } from 'react'
import './styles/App.css'

function App() {

  const[books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [books])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const result = await response.json()
    setBooks(result)
  }

  const handleDeleteBook = async(bookId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/books/${bookId}`, {
        method: 'DELETE'
      })
      const deletedBook = await response.json()
      console.log(deletedBook)
    } catch (error) {
      console.log(error)
    }
    console.log(bookId)
  }



  const bookItems = books.map(book => {
    return <ul key={book._id}>
      <li id={book._id}>
        <b>{book.bookTitle}</b>
        <p>{book.bookGenre}</p>
        <p>{book.bookPublisher}</p>
        <img src={book.bookImageURL}/>
        <button onClick={() => {handleDeleteBook(book._id)}}>Delete</button>
      </li>
    </ul>
  })

  return <>
    {bookItems}
  </>
}


export default App


