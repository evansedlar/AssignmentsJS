
const factsButton = document.getElementById('factsButton')
const factsList = document.getElementById('factsList')



factsButton.addEventListener('click', function() {
    function factsRequest() {
        let request = new XMLHttpRequest()
    
        request.addEventListener('load', function() {
            const parsed = JSON.parse(this.responseText)
            let facts = `
                <li>${parsed.data}</li>
                `
            
            factsList.innerHTML = facts
        })
        request.open('GET', 'http://meowfacts.herokuapp.com/')
        request.send()
    }
    factsRequest()
})

