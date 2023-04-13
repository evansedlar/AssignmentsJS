import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function AddBook() {
    const navigate = useNavigate()

    const[newBook, setNewBook] = useState({
        bookTitle: "",
        bookGenre: "",
        bookPublisher: "",
        bookYear: 0,
        bookImageURL: ""
    })

    const captureInput = (e) => {
        const { name, value } = e.target

        setNewBook((prevNewBook) => ({
            ...prevNewBook,
            [name]: value,
        }))
    }

    const addBook = async () => {
        const response = await fetch('http://localhost:8080/api/add-book', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        navigate('/')
    }

    return(
        <>
            <h1>Add Book</h1>
            <input type="text" placeholder="Title" name="bookTitle" onChange={captureInput}/>
            <input type="text" placeholder="Genre" name="bookGenre" onChange={captureInput}/>
            <input type="text" placeholder="Publisher" name="bookPublisher" onChange={captureInput}/>
            <input type="text" placeholder="Year" name="bookYear" onChange={captureInput}/>
            <input type="text" placeholder="ImageURL" name="bookImageURL" onChange={captureInput}/>
            <button onClick = { addBook }>Add Book</button>
        </>
    )
}

export default AddBook