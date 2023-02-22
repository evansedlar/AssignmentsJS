const dishesUL = document.getElementById('dishesUL')
const entreesButton = document.getElementById('entreesButton')
const dessertsButton = document.getElementById('dessertsButton')

entreesButton.addEventListener('click', () => {
    const entrees = getDishesByCourse('Entrees')
})

dessertsButton.addEventListener('click', () => {
    const desserts = getDishesByCourse('Desserts')
    displayDishes(desserts)
})

function getDishesByCourse(course) {
    return dishes.filter((dish) => {
        return dish.course == course
    })
}

function displayDishes(dishesToDisplay) {
    const dishItems = dishesToDisplay.map((dish) => {
        return`
        <li>
            <img src = '${imageURL}'
            <b>${dish.title}</b>
            <p>${dish.description}</p>
        </li>
        `
    })
}

displayDishes(dishes)

