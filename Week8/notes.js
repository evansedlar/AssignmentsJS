//Sockets: for live chat rooms

const express = require('express')
const app = express()

const http = require('http').Server(app)
io = require('socket.io')(http)
require('socket.io')(http)
app.use(express.static('js'))

let chatMessages = []

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

//When the person makes a sockets connection
io.on('connection', (socket) => {
    console.log('User Connected')
    //server can send a message to the connected user
    io.emit('Houston-Joined', chatMessages)

    //Listen for houston channel
    socket.on('Houston', chat => {
        chatMessages.push(chat)
        io.emit('Houston', chat)
    })
})








http.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/chat')
})