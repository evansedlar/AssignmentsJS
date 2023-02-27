const movieList = document.getElementById('movieList')
const movieDescription = document.getElementById('movieDescription')



// Top list of movies with the link to select
function firstRequest() {
    let request = new XMLHttpRequest()

    request.addEventListener('load', function () {
        const result = JSON.parse(this.responseText)
        const movieInfo = result.Search
        const movies = movieInfo.map((movie) => {
            return `
        <a onclick="secondRequest('${movie.imdbID}')">
            <img src= ${movie.Poster} width = "200px"/>
            <li>${movie.Title}</li>
        </a>    
        `
        })
        movieList.innerHTML = movies.join("")
    })

    request.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=56d32f02')

    request.send()
}




// when the link of the movie is clicked display the info
function secondRequest(imdbID) {
    let newRequest = new XMLHttpRequest()

    newRequest.addEventListener('load', function() {
        const secondResult = JSON.parse(this.responseText)
        const specificMovies = 
            `
            <h1>${secondResult.Title}</h1>
            <div>
            <img src="${secondResult.Poster}"/>
            <ul>
                <li>${secondResult.Year}</li>
                <li>${secondResult.Rated}</li>
                <li>${secondResult.Released}</li>
                <li>${secondResult.Director}</li>
            </ul>
            </div>
            `
        
        movieDescription.innerHTML = specificMovies
    })
    const id = imdbID
    newRequest.open('GET', `http://www.omdbapi.com/?i=${id}&apikey=56d32f02`)
    newRequest.send()
}


firstRequest()