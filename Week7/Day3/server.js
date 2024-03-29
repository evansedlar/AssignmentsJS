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
const { Op } = require('sequelize')
const http = require('http').Server(app)
const io = require('socket.io')(http)
app.use(express.static('js'))

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false
}))

//Chat Room
let chatMessages = []

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

io.on('connection', (socket) => {
    console.log('User Connected')
    // const count = io.engine.clientsCount
    io.emit('coolChat-Joined', chatMessages)

    socket.on('coolChat', (chat) => {
        chatMessages.push(chat)
        io.emit('coolChat', chat)
    })
})


//View all posts
app.get('/index', async(req, res) => {
    const posts = await models.Post.findAll({
        include: [
            {
                model: models.Comment,
                as: 'comments'
            }
        ]
    })
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


//add a comment
app.post('/add-comment', async (req, res) => {
    const newComment = models.Comment.build({
        title: req.body.commentTitle,
        body: req.body.commentBody,
        post_id: parseInt(req.body.post_id)
    })

    await newComment.save()
    res.redirect('/index')
})

//Sort the posts
app.post("/filterDate", async (req, res) => {
    if (req.body.filterDate === "recent") {
      const posts = await models.Post.findAll({
        include: {
          model: models.Comment,
          as: "comments",
        },
        order: [["createdAt", "DESC"]],
      });
      res.render("index", {
        posts: posts,
        user: req.session.user,
      });
    }
  
    if (req.body.filterDate === "oldest") {
      const posts = await models.Post.findAll({
        include: {
          model: models.Comment,
          as: "comments",
        },
        order: [["createdAt", "ASC"]],
      });
      res.render("index", {
        posts: posts,
        user: req.session.user,
      });
    }
  });

//Search bar
app.post('/searchBar', async (req, res) => {
    const query = req.body.searchBar
    const posts = await models.Post.findAll({
        where: {
            [Op.or]: [
                {title: {[Op.iLike]: `%${query}%`}},
                {body: {[Op.iLike]: `%${query}%`}}
            ]
        },
        include: [{model: models.Comment, as: 'comments'}]
    })
    res.render('index', {posts})
})

//Delete a comment
app.post("/delete-comment", async (req, res) => {
    const id = parseInt(req.body.commentId)
    const deletedComment = await models.Comment.destroy({
        where: {
            id: id
        }
    })
    res.redirect('/index')
})

http.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/index`)
})
