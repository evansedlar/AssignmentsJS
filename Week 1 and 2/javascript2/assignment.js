
let todo = []

while(true) {
    let choice = prompt('enter 1 to add item, 2 to delete item, enter 3 to view all items, q to quit')

    if(choice == 'q') {
        break
    }

    if(choice == '1') {
        let taskName = prompt('Enter task name: ')
        let taskPriority = prompt('Enter task priority: ')
        let task = { id: todo.length + 1, name: taskName, priority: taskPriority }
        todo.push(task)
    }
    else if(choice == '2') {
        let taskDelete = prompt('Enter the number associated with your task in the todo list.');
        
        for (let index = 0; index < todo.length; index++) {
            if (taskDelete == todo[index].id) {
                todo.splice(index, 1)
            }
        }
        
    }
    else if(choice == '3') {
        console.log(todo)
}
}



