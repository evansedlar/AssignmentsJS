const chat = document.getElementById('chat')
const sendButton = document.getElementById('sendButton')
const usernameTextBox = document.getElementById('usernameTextBox')
const chatDisplay = document.getElementById('chatDisplay')

sendButton.addEventListener("click", () => {
    const username = usernameTextBox.value
    const chatMessage = chat.value

    socket.emit('coolChat', { username: username, message: chatMessage})
})

socket.on('coolChat-Joined', chatMessages => {
    const chatLine = chatMessages.map(chatMessage => {
        return `<li>${chatMessage.username}: ${chatMessage.message}</li>`
    })
    chatDisplay.innerHTML = chatLine.join('')

    // const counts = `<div>Users in room: ${counts}</div>`
    // userCount.innerHTML = counts
})

socket.on('coolChat', (chatMessage) => {
    const chatMessageLI = `<li>${chatMessage.username}: ${chatMessage.message}</li>`
    chatDisplay.insertAdjacentHTML('beforeend', chatMessageLI)
})
















