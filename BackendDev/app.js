const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(8080, () => {
    console.log('Server is Running')
})

const toDo = []

//get all todo items
app.get("/toDos", (req, res) => {
    res.status(200).json(toDo)
})

//save a new todo item
app.post("/toDos", (req, res) => {
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date

    const todoItem = {title: title ,priority: priority ,date: date}

    toDo.push(todoItem)
    res.status(200).json({success: true, message: "Name has been added"})
})
