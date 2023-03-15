//
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {arr: moviesList})
})

router.get('/create', (req, res) => {
    res.render('addMovie')
})

router.post('/create', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const posterURL = req.body.posterURL

    const newMovie = {
        title: title,
        description: description,
        genre: genre,
        posterURL: posterURL,
        id: moviesList.length + 1
    }

     moviesList.push(newMovie)
     res.redirect('/movies')
})

router.post('/delete', (req,res) => {
    const id = parseInt(req.body.id)
    moviesList = moviesList.filter((movies) => movies.id !== id)

    res.redirect('/movies')
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let movie = movieList.filter((movie) => movie.id === id)

    res.render('index', {arr: movie})
})

router.get('/genre/:genre', (req,res) => {
    const genreFilter = req.params.genre
    const filteredByGenre = movieList.filter((movie) => movie.genre === genreFilter)
    res.render('index', {arr: moviesList})
})


//this line links the code on here to the origial js (server.js)
module.exports = router