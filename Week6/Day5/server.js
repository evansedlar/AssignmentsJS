const express = require('express')
const app = express()
app.use(express.json())
const path = require('path')
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
const port = 8080
app.use(express.static('public'))

function customHeader(req, res, next) {
    res.setHeader('Custom-Header', 'Custom')
    next()
}

app.use(customHeader)

app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    console.log('hello middleware')
    next()
})

app.use(function(req, res, next) {
    res.setHeader('charset', 'utf-8')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/info', (req, res) => {

    const myInfo = {
        name: 'Evan Sedlar',
        email: 'bob@gmail.com',
        phone: 1234561234
    }

    res.json(myInfo)

})

app.get('/random/:thing', (req, res) => {
    const thing = req.params.thing
    res.send(`This is where you will see ${thing}`)
})

app.get('/log-page', (req, res) => {
    res.render('log-page')
})

app.get('/new-route', (req, res) => {
    res.send('redirected page')
})

app.get('/old-route', (req, res) => {
    res.redirect('/new-route')
})

app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'file.txt')
    res.download(file)
})

app.post('/log-page', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const newName = {name: name, age: age}
    console.log(JSON.stringify(newName))
    res.redirect('log-page')
})

app.use((req, res, next) => {
    res.status(404).send('Error: 404 Page not found')
})













app.listen(port, () => {
  console.log(`Server is running on http://localhost:${8080}`)
})