
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
const Book = require('./schemas/book')


mongoose.connect('mongodb+srv://evansedlar:HaIU5KbjpQ6mFl8D@todo.2wvcgs1.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('MongoDB is Connected.')
}).catch((error) => {
    console.log(error)
})






app.get('/', async(req, res) => {
    try{
        const books = await Book.find({})
        res.render('index', {books: books})
    } catch {
        res.render('index', {errorMessage: 'Unable toget books!'})
    }
})

app.get('/books/:bookId', async(req, res) => {
    const bookId = req.params.bookId
    const book = await Book.findById(bookId)
    if(book){
        res.render('book-details', book)
    } else {
        res.render('book-details', {errorMessage: 'BookId was not found.'})
    }
    res.render('/book-details')
})

app.post('/create-book', async(req, res) => {

    const name = req.body.name
    const isbn = req.body.isbn
    const author = req.body.author
    const isPublished = req.body.isPublished

    // create an instance of Book model
    const book = new Book ({
        name: name,
        isbn: isbn, 
        author: author, 
        isPublished: isPublished
    })

    //save the book to the database
    const savedBook = await book.save()
    res.render('/')

})

app.post('/update-book', async(req, res) => {
    const bookId = req.body.bookId
    const name = req.body.name
    const isbn = req.body.isbn
    const author = req.body.author
    const isPublished = req.body.isPublished

    const bookToUpdate = {
        bookId: bookId,
        name: name,
        isbn: isbn,
        author: author,
        isPublished: isPublished
    }
    const updatedBook = await Book.findByIdAndUpdate(bookId, bookToUpdate)
    res.redirect('/')
})

app.post('/delete-book', async(req, res) => {

    const bookId = req.body.bookId
    const deletedBook = await Book.findByIdAndDelete(bookId)
    res.redirect('/')
})


http.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/chat')
})

//npm install mongoose