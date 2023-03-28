
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
const Item = require('./schema/item')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://evansedlar:HaIU5KbjpQ6mFl8D@todo.2wvcgs1.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('MongoDB is Connected.')
}).catch((error) => {
    console.log(error)
})


//view all tasks
app.get('/', async(req, res) => {
    try {
        const items = await Item.find({})
        res.render('index', { items: items })
    } catch {
        res.render('index', {errorMessage: 'Unable to get list Items.'})
    }
})

//add a new task
app.get('/add-item', (req, res) => {
    res.render('add-item')
})

app.post('/add-item', async(req, res) => {

    const title = req.body.title
    const priority = req.body.priority
    const completedDate = req.body.completedDate

    const todoItem = new Item ({
        title: title,
        priority: priority,
        completedDate: completedDate
    })
    const savedItem = await todoItem.save()
    res.redirect('/')
})

//delete Task
app.post('/delete-task', async(req, res) => {
    
    const taskId = req.body.taskId
    await Item.findByIdAndDelete(taskId)
    res.redirect('/')
})

//update Task
app.post('/update-task', async(req, res) => {
    const id = req.body.taskId

    const item = await Item.findById(id)
    console.log(item)
    console.log(item.title)
    res.render('update-task', item)
})

app.post('/update-info', async(req, res) => {
    const title = req.body.title
    const priority = req.body.priority
    const completedDate = req.body.completedDate
    const taskId = req.body.taskId

    const taskToUpdate = {
        title: title,
        priority: priority,
        completedDate: completedDate
    }
    await Item.findByIdAndUpdate(taskId, taskToUpdate)
    res.redirect('/')
})

//app listener
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/')
})