const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 8080
//initializing pg promise
const pgp = require('pg-promise')()

const connectionString = 'postgres://ardsarvc:LEarv0GVJ6tDYydyeG_ZSTOEMYnyD83G@ruby.db.elephantsql.com/ardsarvc'

const db = pgp(connectionString)
console.log(db)

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.get('/', async (req, res) => {
    const friends = await db.any('SELECT id, name, favorite_movie FROM friends')

    res.render('index', {friends: friends})
})

app.post('add-friend', async (req, res) => {
    const name = req.body.name
    const favoriteMovie = req.body.favoriteMovie

    await db.none('INSERT INTO friends(name, favorite_movie) VALUES($1, $2)', [name, favoriteMovie])

    res.redirect('/')
})


app.post('/delete-movie', async (req, res) => {

    const movieId = parseInt(req.body.movieId)
    await db.none('DELETE FROM movies WHERE id = $1', [movieId])
    res.redirect('/')
})















//add a new movie
// app.post('/add-movie', async (req, res) => {
//     const movieName = req.body.movieName
//     const movieYear = parseInt(req.body.movieYear)

//     await db.none('INSERT INTO movies(name, year) VALUES($1, $2)', [movieName, movieYear])

//     res.redirect('/')
// })

// get all movies and display them on the screen
// app.get('/', async (req, res) => {

//     //any is used when you want to return an array
//     const movies = await db.any('SELECT id, name, year FROM movies')
//     console.log(movies)

//     res.render('index', {movies: movies})
// })


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})