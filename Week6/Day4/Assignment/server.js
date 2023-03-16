const express = require('express')
const cors = require('cors')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()
// const tripsRouter = require('./routes/trips')

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false,
}))

const PORT = 8080

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded())
app.use(cors())
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'mustache')

let users = [
    {username: "evansedlar", password: "password"}, 
    {username: "sedlarevan", password: "password"}
]

let trips = [{
    title: "Denver",
    image: "swag.com",
    departure: "test",
    arrive: "test",
    }
]

function authenticateUser(req, res, next) {
    if(req.session) {
        if(req.session.username) {
            next()
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}

app.get('/', authenticateUser, (req, res) => {
    res.render('index', {arr: trips})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = users.find(user => user.username == username && user.password == password)

    if(user) {
        if(req.session) {
            req.session.username = username
            res.redirect('/')
        }else {
            res.render('login', {errorMessage: 'Username or Password is incorrect.'})
        }
        
    } else {
        res.render('login', {errorMessage: 'Username or Password is incorrect.'})
    }

})

//Add Trip
app.get("/addTrip", (req, res) => {
    res.render('addTrip')
})

app.post("/addTrip", (req, res) => {
    const newTrip = {
        title: req.body.title, 
        image: req.body.image,
        departure: req.body.departure, 
        arrive: req.body.arrive,
        tripId: trips.length +1,
        username: req.session.username
    }

    trips.push(newTrip)
    res.redirect('/')
})

app.post("/deleteTrip", (req, res) => {
    const tripId = req.body.tripId
    console.log(tripId)
    trips = trips.filter((trip) => trip.tripId != tripId)
    res.redirect('/')
})

app.post("/register", (req, res) => {
    let newUsername = req.body.newUsername
    let newPassword = req.body.newPassword
    let existingUser = users.find((user) => {
        return user.username == newUsername
    })

    if(existingUser) {
        res.render("register", {newMessage: "Username already exists."})
    } else {
        let newUser = { username: newUsername, password: newPassword }
        users.push(newUser)
        console.log(users)
        res.redirect('/')
    }
})



app.listen(PORT, () => {
    console.log('Server is Running')
})