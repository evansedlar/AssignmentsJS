const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.listen(8080, () => {
    console.log('Server is Running')
})

// const toDo = []

//get all todo items
// app.get("/toDos", (req, res) => {
//     res.status(200).json(toDo)
// })

//save a new todo item
// app.post("/toDos", (req, res) => {
//     const title = req.body.title
//     const priority = req.body.priority
//     const date = req.body.date

//     const todoItem = {title: title ,priority: priority ,date: date}

//     toDo.push(todoItem)
//     res.status(200).json({success: true, message: "Name has been added"})
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////

// movies/action/2023
// movies/kids/2022

// /movies/:genre/:year 

// And then on the index page display the genre and the year passed in the url.

// app.get("/movies/:genre/:year", (req, res) => {
//     const genre = req.params.genre
//     const year = req.params.year
//     res.render('index', {genre: genre, year: year})
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////

const tripsRouter = require('./routes/trips')

app.use('/trips', tripsRouter)

global.trips = [{tripId: 1,  title: 'new Orleans'}, {tripId: 2, title: 'Denver'}]





