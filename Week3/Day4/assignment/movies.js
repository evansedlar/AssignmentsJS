const titleTextBox = document.getElementById("movieTitleTextBox")
const yearTextBox = document.getElementById("movieYearTextBox")
const posterTextBox = document.getElementById("moviePosterTextBox")
const submitButton = document.getElementById("submitButton")
const movieDisplay = document.getElementById("movieDisplay")


let movies = movielist.Search

function displayMovies() {
    movieDisplay.innerHTML = ''

    const movieInfo = movies.map((info) => {
        return `
        <h1>${info.Title}</h1>
        <div>${info.Year}</div>
        <img src = "${info.Poster}" width = "300px" />
        <button class="deleteButton" onClick = "deleteMovie('${info.Title}')" >Delete</Button>
        `
    }) 

    
    movieDisplay.innerHTML += movieInfo.join(" ")
}



function addMovies() {
    let newMovie = {
        Title: `${titleTextBox.value}`,
        Year: `${yearTextBox.value}`,
        Poster: `${posterTextBox.value}`
    }
    movies.unshift(newMovie) //adds to the front of the list

    displayMovies()
}


function deleteMovie(title) {
    
    const newMovieList = movies.filter((movie) => {
        return movie.Title !== title
    })
    movies = newMovieList //this is to reassign the value from the displayMovies function which is currently 'movies'
    displayMovies()

}





// deleteButton.addEventListener('click', )
submitButton.addEventListener('click', addMovies) //button click

displayMovies()