const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 8080
const pgp = require('pg-promise')()
const connectionString = 'postgres://ardsarvc:LEarv0GVJ6tDYydyeG_ZSTOEMYnyD83G@ruby.db.elephantsql.com/ardsarvc'
const db = pgp(connectionString)
const session = require('express-session')
const bcryptjs = require('bcryptjs')
app.engine('mustache', mustacheExpress())
app.set('views', "./views")
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false
}))




//Login and accounts-----------------------------------------------------------------


app.get('/', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {

    let user = await db.oneOrNone('SELECT id, username, password FROM users WHERE username = $1', [req.body.username])

    if(user) {
        const result = bcryptjs.compare(req.body.password, user.password)
        if(result) {
            if(req.session) {
                req.session.username = req.body.username
            }
            res.redirect('/index')
        } else {
            res.render('login', {err: 'Invalid Credentials'})
        }
    } else {
        res.render('login', {err: 'Invalid Credentials'})
    }
    req.session.username = req.body.username
})

app.post('/register', async (req, res) => {
    const password = req.body.password

    let salt = await bcryptjs.genSalt(10)
    let hashedPass = await bcryptjs.hash(password, salt)

    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, hashedPass])
    console.log(`New User ${req.session.username} has been added`)
    res.redirect('/')
})

app.post('/sign-out', (req, res) => {
    res.render('login', {message: `Successfully signed out as ${req.session.username}`})
    req.session.username = null
})



//View all Posts---------------------------------------------------------------------
app.get('/index', async (req, res) => {
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

    await db.none('INSERT INTO blog(title, body, author, is_published) VALUES($1, $2, $3, $4)', [title, body, author, true])
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

//Comments---------------------------------------------------------------------------
app.post('/filter-posts', async (req, res) => {
    const blog = await db.any('SELECT id, title, body, author, date_created, date_updated FROM blog')
    const filteredPosts = blog.filter((post) => post.author === req.session.username)
    const sessionUser = req.session.username
    res.render('index', {blog: filteredPosts, user: sessionUser})
})

app.get('/post-details', async(req, res) => {
    const post = await db.one('SELECT id, title, body, author, date_created, date_updated FROM blog WHERE id = $1', [req.body.id])
    const comments = await db.any('SELECT body, id FROM comments WHERE post_id = $1', [req.body.id])

    res.render('postDetails', {post: post, comments: comments})
})

app.post('/post-details', async (req, res) => {
    const post = await db.one('SELECT id, title, body, author, date_created, date_updated FROM blog WHERE id = $1', [req.body.id])
    const comments = await db.any('SELECT body, id FROM comments WHERE post_id = $1', [req.body.id])

    res.render('postDetails', {post: post, comments: comments})
})

app.post('/add-comment', async (req, res) => {
    await db.none('INSERT INTO comments(body, post_id) VALUES($1, $2)', [req.body.comment, req.body.post_id])

    res.redirect('index')
})

app.post('/delete-comment', async (req, res) => {
    const id = parseInt(req.body.commentId)

    await db.none('DELETE FROM comments WHERE id = $1', [id])
    res.redirect('/post-details')
})


//Listener---------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})