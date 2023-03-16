const express = require('express')
const cors = require('cors')
const mustacheExpress = require('mustache-express')
const session = require('session')
const app = express()

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false,
}))

const POST = 8080

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded())
app.use(cors())
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'mustache')















app.listen(PORT, () => {
    console.log('Server is Running')
})