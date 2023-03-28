
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    isbn: String,
    author: String,
    isPublished: Boolean
})


//mongoose.model('ModeName', schema) - Model Name automatically pluralize
const book = mongoose.model('Book', bookSchema)
