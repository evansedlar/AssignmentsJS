const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const cors = require('cors')
const moviesRouter = require('./routes/movies')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(cors())
app.use(express.json())
app.use(express.static('static'))

const PORT = 8080

global.moviesList = [{
    title: 'test',
    desription: 'test',
    genre: 'action',
    posterURL: 'swag.com',
    id: 1
}]

global.movieDetails = []

app.use('/movies', moviesRouter)












app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/movies`)
})
