const allButton = document.getElementById("allButton")
const starterButton = document.getElementById("starterButton")
const entreeButton = document.getElementById("entreeButton")
const dessertButton = document.getElementById("dessertButton")
const dishesContainer = document.getElementById("dishesContainer")
const menuList = document.getElementById("menuList")


allButton.addEventListener('click', function() {
    const fullMenu = dishes.map(function(dish) {
        return `<li>
        <img src = "${dish.imageURL}" width = "200px" />
        <div>${dish.title}</div> 
        <div>${dish.description}</div>
        <div>${dish.price}</div>  
    </li>`
    })
    menuList.innerHTML = fullMenu.join(" ")
})
 


starterButton.addEventListener('click', function() {
    const starterDishes = dishes.filter(function(dish) {
        return dish.course == "Starters"
    }) 
    
    
    
    const starterUL = starterDishes.map((dishes) => {
        return `<li>
            <img src = "${dishes.imageURL}" width = "200px"/>
            <div>${dishes.title}</div> 
            <div>${dishes.description}</div>
            <div>${dishes.price}</div>  
        </li>`
    
    })
    
    menuList.innerHTML = starterUL.join(" ")
    
})

entreeButton.addEventListener('click', function() {
    const entreeDishes = dishes.filter(function(dish) {
        return dish.course == "Entrees"
    }) 
    
    
    
    const entreeUL = entreeDishes.map((dishes) => {
        return `<li>
            <img src = "${dishes.imageURL}" width = "200px"/>
            <div>${dishes.title}</div>  
            <div>${dishes.description}</div>
            <div>${dishes.price}</div>  
        </li>`
    
    })
    
    menuList.innerHTML = entreeUL.join(" ")
    
})


dessertButton.addEventListener('click', function() {
    const dessertDishes = dishes.filter(function(dish) {
        return dish.course == "Desserts"
    }) 
    
    
    
    const dessertUL = dessertDishes.map((dishes) => {
        return `<li>
            <img src = "${dishes.imageURL}" width = "200px"/>
            <div>${dishes.title}</div> 
            <div>${dishes.description}</div>
            <div>${dishes.price}</div>  
        </li>`
    
    })
    
    menuList.innerHTML = dessertUL.join(" ")
    
})