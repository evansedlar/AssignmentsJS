const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const models = require('./models')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
const PORT = 8080

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false
}))

//View all posts
app.get('/index', async(req, res) => {
    const posts = await models.Post.findAll({})
    res.render('index', {posts: posts})
})

//add a new post
app.post('/add-post', async (req, res) => { 

    const title = req.body.title
    const body = req.body.body
    const category = req.body.category

    const newPost = await models.Post.build({
        title: title,
        body: body,
        category: category
    })

    await newPost.save()
    res.redirect('/index')
})

app.get('/add-post', (req, res) => {
    res.render('add-post')
})

//Delete a post
app.post('/delete-post', async (req, res) => {
    const postId = parseInt(req.body.id)
    const deletedMovie = await models.Post.destroy({
        where: {
            id: postId
        }
    })
    res.redirect('/index')
})


//update post
app.post('/update-post', async (req, res) => {
    
    const post = await models.Post.findAll({
        where: {
            id: parseInt(req.body.id)
        }
    })

    const postInfo = {
        id: post[0].dataValues.id,
        title: post[0].dataValues.title,
        body: post[0].dataValues.body,
        category: post[0].dataValues.category
    }
    res.render('update-post', postInfo)
})

app.post('/update-post-info', async (req, res) => {
    await models.Post.update({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category}, {
        where: {
            id: parseInt(req.body.id)
        }
    })
    res.redirect('/index')
})

//filter
app.post('/filter', async (req, res) => {
    const filteredPosts = await models.Post.findAll({
        where: {
            category: req.body.category
        }
    })

    let filteredArr = []
    for(let i = 0; i < filteredPosts.length; i++) {
        const postInfo = {
            id: filteredPosts[i].dataValues.id,
            title: filteredPosts[i].dataValues.title,
            body: filteredPosts[i].dataValues.body,
            category: filteredPosts[i].dataValues.body
        }
        filteredArr.push(postInfo)
    }
    res.render('index', {posts: filteredArr})
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
