
const todoList = document.getElementById('todoList')
const inputTask = document.getElementById('inputTask')
const inputPriority = document.getElementById('inputPriority')
const inputDate = document.getElementById('inputDate')
const submitButton = document.getElementById('submitButton')

async function showList() {
    const response  = await fetch("http://localhost:8080/toDos")
    const todos = await response.json()
    const list = todos.map((todo) => {
        return `
        <h1>${todo.title}</h1>
        <li>Priority: ${todo.priority}</li>
        <li>Date: ${todo.date}</li>
        `
    })
    todoList.innerHTML = list.join("")
}

async function addTask(t, p, d) {
    const body = {
        title: t,
        priority: p,
        date: d
    }

    const request = await fetch("http://localhost:8080/toDos", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(body)
    })
}


submitButton.addEventListener('click', () => {
    const todoTitle = inputTask.value
    const todoPriority = inputPriority.value
    const todoDate = inputDate.value

    addTask(todoTitle, todoPriority, todoDate)
})

showList()










