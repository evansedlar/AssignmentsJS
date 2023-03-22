const express = require('express')
const app = express()
const PORT = 8080
const bcrypt = require('bcryptjs')
const pgp = require('pg-promise')()
const connectionString = 'postgres://ardsarvc:LEarv0GVJ6tDYydyeG_ZSTOEMYnyD83G@ruby.db.elephantsql.com/ardsarvc'
const db = pgp(connectionString)
const models = require('./models')
app.use(express.urlencoded())



app.post('/encrypt', async(req, res) => {
    const secret = req.body.secret

    let salt = await bcrypt.genSalt(10)
    let hashedPass = await bcrypt.hash(secret, salt)

    const object = {value: hashedPass}
    console.log(JSON.stringify(object))
    res.json(object)
})


//get all movies
app.get('/', async(req,res) => {
    const movies = models.Movie.findAll({})
    res.render('index', {movies: movies})
})

//add a movie
app.post('/add-movie', async (req, res) => {

    const title = req.body.title
    const genre = req.body.genre
    const year = parseInt(req.body.year)

    //create Movie object //Build is not going to save the object but just build it
    const movie = models.Movie.build({
        title: title,
        genre: genre,
        year: year
    })
    //save the movie to the database
    const savedMovie = await movie.save()
})

//delete a movie
app.post('/delete-movie', async (req, res) => {

    const movieId = parseInt(req.body.movieId)
    const deletedMovie = await models.Movie.destroy({
        where: {
            id: movieId
        }
    })
    res.render('index')

})

//find one movie by id
app.get('/movies/:movieId', async (req, res) => {
    const movieId = parseInt(req.params.moiveId)
    let movie = models.Movie.findByPk(movieId)
    res.render('index', {movie})
})

//filtering by genre
app.get('/movies/genre/:genre', async (req, res) => {

    const genre = req.params.genre
    const movies = await models.Movie.findAll({
        where: {
            genre: {
                [Op.iLike]: genre
            }
        }
    })
    res.render('')


})

//in the case you have forgotten to add a colunn to your table 
//sequelize migration:create --name 'adding-director-name-column-to-movies.js'
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})