const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.use(express.urlencoded())
app.use('/', moviesRouter)



app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})