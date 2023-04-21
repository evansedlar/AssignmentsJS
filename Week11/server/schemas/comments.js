const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userID: String,
    comment: String
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment