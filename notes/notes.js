
//import express
// const express = require('express')
//app is a function that contains all the required functions that we need
// const app = express()

//Tell express how to parse JSON requests
// app.use(express.json())

//localhost: 8080

// app.get('/', (req, res) => {
    //req is the request
    //res is the response

    //you MUST send back a resonse otherwise your browser will keep on waiting
//     res.send('Hello World')
// })

// app.get('/name', (req, res) => {
//     res.send('This is name route/endpoint')
// })

//startthe server
// your port number can be different but 8080 is common
// app.listen(8080, () => {
//     console.log('Server is Running')
// })

// app.get('/my-name', (req, res) => {
//     res.send('Evan Sedlar')
// })

//return json

// app.get('/name', (req, res) => {
//     let person = {firstName: 'John', lastName: 'Doe'}
//     res.status(200).json(person)
// })

// app.get('/customers', (req, res) => {
//     let customers = [{name: 'John Doe'}, {name: "mary Doe"}, {name: 'Steven Smith'}]
//     res.status(200).json(customers)
// })

// app.get('/name', (req, res) => {
//     let person = {firstName: 'Evan', lastName: 'Sedlar'}
//     res.status(200).json(person)
// })

// Route Parameters

// app.get('/movies/action', (req, res) => {
//     res.send('Action Movies')
// })

// movies/kids
// movies/action
// movies/horror
// :genre should be replaced by an actual genre like kids, action, or horror etc
// app.get('/movies/:genre', (req, res) => {
    
//     const genre = req.params.genre
//     const moviesByGenre = movies.filter(movie => movie.genre == genre)
//     res.json(moviesByGenre)
// })

// app.get('/digital-crafts/cohort/:year', (req, res) => {
//     const year = req.params.year
//     res.send(`I study at DigitalCrafts ${year} cohort`)
// })


// /movies/2000
// :year must be reaplaced by an actual value (2005, 2016)
// app.get('/movies/:year', (req, res) => {
//     const year = req.params.year
//     res.send(year)
// })

// movies/:genre/:year
// app/get('/movies/:genre/:year', (req, res) => {
//     const genre = req.params.genre
//     const year = req.params.year
//     res.send(year + genre)
// })


//Post Routes-------------------------------------------------------------------------------------------
//localhost:8080
//Method: POST
// app.post('/movies', (req, res) => {
//     const movieName = req.body.name
//     const movieGenre = req.body.genre
//     console.log(movieName, movieGenre)
//     res.send('OK')
// })

// let names = []

// app.get('/name', (req, res) => {
//     res.status(200).json(names)
// })

// app.post('/name', (req, res) => {
//     const firstName = req.body.first
//     const lastName = req.body.last
//     const newName = {first: firstName, last: lastName}
//     names.push(newName)
//     res.status(200).json({success: true, message: "Name has been added"})
// })


///////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO list Web API using node

// const toDo = []

//get all todo items
// app.get("/toDos", (req, res) => {
//     const title = req.body.title
//     const priority = req.body.priority
//     const date = req.body.date
//     const todoItem = {title: tit ,priority: pri ,date: date}
//     toDo.push
// })

//save a new todo item
// app.post("/toDos", (req, res) => {

// })


/////////////////////////////////////////////////////////////////////////////////////////

//Server side pages means that your server will return the completed page.

// const express = require('express')
// const app = express()
// const mustacheExpress = require('mustache-express')

// setting up mustache as a templating engine
// app.engine('mustache', mustacheExpress())

// the pages are located in the views directory
// app.set("views", "./views")

// extension for all the pages
// app.set('view engine', 'mustache')

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.listen(8080, () => {
//     console.log('Server is Running')
// })


//////////////////////////////////////////////////////////////////////////////////////////

//SESSIONS

// install session "npm install express-session"

const session = require('express-session')

let users = [{username: 'johndoe', password: 'password'},{username: 'marydoe', password: 'password'}]

//session middleware
// do not put sensitive information in session
// this includes password, cc, ssn, passport, bank account information.
app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false,
}))

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password
        //find function is going to return a single object
    const user = users.find(user => user.username = username && user.password == password)

    if(user) {
        // we can put something in the session
        if(req.session) {
            req.session.username = username
        }
        res.render('dashboard')
    } else {
        // username or password is incorrect
        res.render('login', {errorMessage: "username or password is incorrect"})
    }

})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/page1', (req, res) => {
    //if session is initialized
    if(req.session) {
        req.session.catName= 'My Cat Name'
    }
    res.render('index')
})

app.get('/page2', (req, res) => {

    console.log(req.session.catName)
    res.render('index')
})

