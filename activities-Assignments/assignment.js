const taskNameTextBox = document.getElementById('taskNameTextBox')
const addTaskButton = document.getElementById('addTaskButton')
const pendingTaskUL = document.getElementById('pendingTaskUL')
const completedTaskUL = document.getElementById('completedTaskUL')

addTaskButton.addEventListener('click', function() {

    const taskName = taskNameTextBox.value

    const li = document.createElement('li')
    li.innerHTML = taskName
    pendingTaskUL.appendChild(li)

    const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        li.prepend(checkBox)

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', function() {
        this.parentElement.parentElement.removeChild(this.parentElement)
        
    })

    li.appendChild(deleteButton)
    pendingTaskUL.appendChild(li)

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            completedTaskUL.appendChild(li)
        } else{
            pendingTaskUL.appendChild(li)
        }
    })

})

