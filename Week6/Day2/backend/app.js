const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
app.use(express.urlencoded())

let movies = [{name: 'Batman', year: 2002}, {name: 'Spiderman', year: 2023}]

app.engine('mustache', mustacheExpress())

app.set("views", "./views")

app.set('view engine', 'mustache')

app.get('/add-movie', (req, res) => {
    res.render('add-movie')
}) 

app.post('/add-movie', (req, res) => {

    const movieName = req.body.movieName
    const movieYear = req.body.movieYear
    
    const movie = { name: movieName, year: movieYear}
    movies.push(movie)

    res.redirect('/movies') // redirect to show all movies route
})

app.get('/movies', (req, res) => {

    res.render('movies', { allMovies : movies })
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/customers/:name', (req, res) => {
    const customer = {name: "Evan"}
    res.render("index", customer)
})

app.listen(8080, () => {
    console.log('Server is Running')
})