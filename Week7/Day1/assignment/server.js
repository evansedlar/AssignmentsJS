const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 8080
const pgp = require('pg-promise')()
const connectionString = 'postgres://ardsarvc:LEarv0GVJ6tDYydyeG_ZSTOEMYnyD83G@ruby.db.elephantsql.com/ardsarvc'
const db = pgp(connectionString)
const session = require('express-session')
app.engine('mustache', mustacheExpress())
app.set('views', "./views")
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false
}))




//Login and accounts-----------------------------------------------------------------
const authenticateUser = async (req, res, next) => {
    const usersArr = await db.any('SELECT username, password FROM users')
    const user = usersArr.find((user) => user.username === req.session.username && user.password === req.session.password)
    if(user) {
        next()
    }else {
        req.session.username = null
        req.session.password = null
        res.render('login', {err: 'username or password is invalid'})
    }
}

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    req.session.username = req.body.username
    req.session.password = req.body.password
    res.redirect('/index')
})

app.post('/register', async (req, res) => {
    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, req.body.password])
    req.session.username = req.body.username
    req.session.password = req.body.password
    console.log(`New User has been added`)
    res.redirect('/index')
})

app.post('/sign-out', (req, res) => {
    res.render('login', {message: `Successfully signed out as ${req.session.username}`})
    req.session.username = null
    req.session.password = null
})



//View all Posts---------------------------------------------------------------------
app.get('/index', authenticateUser, async (req, res) => {
    const sessionUser = req.session.username
    const blog = await db.any('SELECT id, title, author, body, date_created, date_updated FROM blog')
    res.render('index', {blog: blog, user: sessionUser})
})

app.get('/view-all', (req, res) => {
    res.redirect('index')
})
//Add Posts--------------------------------------------------------------------------
app.get('/add-post', (req, res) => {
    res.render('add-post')
})

app.post('/add-post', async (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const author = req.session.username

    await db.none('INSERT INTO blog(title, body, author) VALUES($1, $2, $3)', [title, body, author])
    res.redirect('/index')
})


//Delete posts-----------------------------------------------------------------------
app.post('/delete-post', async (req, res) => {
    const id = parseInt(req.body.id)
    await db.none('DELETE FROM blog WHERE id = $1', [id])
    res.redirect('/index')
})


//Update posts-----------------------------------------------------------------------
let updateArr = []

app.get('/update-post', (req, res) => {
    res.render('update-post', {arr: updateArr})
})

app.post('/update-post', async (req, res) => {
    const id = req.body.id
    const info = await db.one('SELECT title, body, id FROM blog WHERE id = $1', [id])
    updateArr.pop()
    updateArr.push(info)
    res.redirect('/update-post')
})

app.post('/update-info', async (req, res) => {
    const time = new Date
    const isoTime = time.toISOString()
    await db.none('UPDATE blog SET title = $1, body = $2, date_updated = $3 WHERE id = $4', [req.body.title, req.body.body, isoTime, req.body.id])
    res.redirect('/index')
})


//All of my posts--------------------------------------------------------------------
app.post('/my-posts', async (req, res) => {
    const blog = await db.any('SELECT id, title, author, body, date_created, date_updated FROM blog')
    const myBlog = blog.filter((blog) => blog.author === req.session.username)
    res.render('index', {blog: myBlog})
})







//Listener---------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})