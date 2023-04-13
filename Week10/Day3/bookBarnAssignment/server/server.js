const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const Book = require('./schemas/book')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://evansedlar20:ZzH7ITXoiE6e1M5a@cluster0.w3d1vde.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('DB connected')
}).catch((error) => {
    console.log(error)
})


app.post('/api/add-book', async (req, res) => {
    const bookTitle = req.body.bookTitle
    const bookGenre = req.body.bookGenre
    const bookPublisher = req.body.bookPublisher
    const bookYear = req.body.bookYear
    const bookImageURL = req.body.bookImageURL

    const book = new Book({
        bookTitle:bookTitle,
        bookGenre:bookGenre,
        bookPublisher:bookPublisher,
        bookYear:bookYear,
        bookImageURL:bookImageURL
    })
    await book.save()
    res.json(book)
})


app.get('/api/books', async(req, res) => {
    const books = await Book.find({})
    res.json(books)
})


app.listen(8080, () => {
    console.log('Server is running...')
})