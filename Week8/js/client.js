const chatMessageTextBox = document.getElementById('chatMessageTextBox')
const usernameTextBox = document.getElementById('usernameTextBox')
const sendMessageButton = document.getElementById('sendMessageButton')
const messagesUL = document.getElementById('messagesUL')

sendMessageButton.addEventListener('click', () => {
    const username = usernameTextBox.value
    const chatMessage = chatMessageTextBox.value
    //send the message to the server
    socket.emit('Houston', { username: username, message: chatMessage})
})

socket.on('Houston-Joined', chatMessages => {
    const chatMessagesItems = chatMessages.map(chatMessage => {
        return `<li>${chatMessage.username}: ${chatMessage.message}</li>`
    })
    messagesUL.innerHTML = chatMessagesItems.join('')
})

socket.on('Houston', (chat) => {
    console.log(chat) //this will send it to the Chrome Dev Tools Console
    const chatMessageLI = `<li>${chat.username}: ${chat.message}</li>`
    messagesUL.insertAdjacentHTML('beforeend', chatMessageLI)
})











