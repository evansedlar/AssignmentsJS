// Access the body element
// document.body

// even though you can call buttonClicked on a click of a button, this function is still available to the rest of the app and can be called accidentally.
// function buttonClicked() {
//     console.log("Button is clicked...")
// }

// Access to an element by its id
let saveButton = document.getElementById("saveButton")


// click is the name of the event
saveButton.addEventListener('click', function() {
    helloHeading.innerHTML = 'Hello'
})

// Get all elements whose tag is li
document.getElementsByTagName("li")
console.log(document.getElementsByTagName("li"))

let helloHeading = document.getElementById('helloHeading')

///////////////////////////////////////////////////////////////////////

// how to show a list of objects using JS

// loop through the list

let moviesUL = document.getElementById('movieUL')

movies = [Title: ,Year: , Poster: ]

for(let i = 0; i < movies.length; i++) {
    const li = document.createElement('li')
    const image = document.createElement('img')
    image.setAttribute('src', movies[i].Poster)

    li.appendChild(image)

    moviesUL.appendChild(li)

    const titleDiv = document.createElement('div')
    titleDiv.innerHTML = movies[i].title
    li.appendChild(titleDiv)

    const yearI = document.createElement('i')
    yearI.innerHTML = movies[i].Year
    li.appendChild(yearI)
}

/////////////////////////////////////////////////////////////////////

// Using Template Literal

for(let i = 0; i < movies.length; i++) {
    let movie = movies[i]
    const movieItem = `
    <li>
        <img src = "${movie.Poster}" />
        <h1>${movie.Title}</h1>
        <i>${movie.Year}</i>
    </li>`
    // concatenating
    // This will create a brand new string each time movieItem is concatenatied
    // thith moviesUL.innerHTML. This can be bad for performance for larger apps
    // moviesUL.innerHTML += movieItem

    //insertAdjacentHTML will not concatenate the strings
    //This allows for better performance for larger apps
    moviesUL.innerHTML += movieItem //moviesUL.insertAdjacentHTML('beforeend', movieItem)
}


// Template Literals with an array helper

const movieItems = movies.map(function(movie) {
    return ` <li>
    <img src = "${movie.Poster}" />
    <h1>${movie.Title}</h1>
    <i>${movie.Year}</i>
</li> `
})

moviesUL.innerHTML = movieItems.join('') //joins array based on what you specify


