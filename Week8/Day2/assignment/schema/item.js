const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: String,
    priority: String,
    completedDate: Date
})

const item = mongoose.model('Item', itemSchema)

module.exports = item