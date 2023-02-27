

let request = new XMLHttpRequest() // async request


request.addEventListener('load', function() {
    // JSON.parse takes in a valid JSON string and returns an object
    const result = JSON.parse(this.responseText)
    const movies = result.Search
})



request.open('GET', 'URL') //plug in actual URL

request.send()













