const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./schemas/users')
const Comment = require('./schemas/comments')
const { check, validationResult } = require('express-validator')
app.use(express.static('static'))
app.use(express.json())
app.use(cors())
app.use(timeStamp)

mongoose.connect('mongodb+srv://evansedlar20:ZzH7ITXoiE6e1M5a@cluster0.w3d1vde.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('DB connected')
}).catch((error) => {
    console.log(error)
})


function timeStamp(req, res, next) {
    const date = new Date()
    const stamp = date.getTime()
    const url = req.url
    console.log(date, stamp, url)
    next()
}


app.get('/api/users', async(req, res) => {
    const users = await User.find({})
    res.json(users)
})

app.post('/api/add-user', async(req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const age = req.body.age

    const user = new User({
        firstName: firstName,
        lastName: lastName,
        age: age,
    })
    await user.save()
    res.json(user)
})

app.post('/api/users/:id', async(req, res) => {
    const id = req.params.id
    const deleted = await User.findByIdAndDelete(id)
    res.redirect('/api/users')
})

app.put('/api/users/:id', async(req, res) => {
    const id = req.params.id

    const { firstName, lastName, age } = req.body
    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, age }, { new: true })
    res.json(updatedUser)
})

app.patch('/api/users/:id', async(req, res) => {
    const id = req.params.id

    const { firstName, lastName, age } = req.body
    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, age }, { new: true })
    res.json(updatedUser)
})

app.get('/api/users/:id', async(req, res) => {
    const id = req.params.id
    const oneUser = await User.findById(id)
    res.json(oneUser)
})

app.get('/api/comments/:userID', async(req, res) => {
    try {
    const id = req.params.userID
    const comments = await Comment.find({userID: id})
    res.json(comments)
    } catch (error) {
        console.error(error)
    }
})

app.post("/api/users",
    [
        check("firstName").not().isEmpty(),
        check("lastName").not().isEmpty(),
        check("age").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array()})
        }

        const { firstName, lastName, age } = req.body

        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            age: age
        })

        await newUser.save()

        res.redirect('/api/users')
    }
)

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/api/users')
})

