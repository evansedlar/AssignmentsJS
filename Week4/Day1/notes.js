

// let request = new XMLHttpRequest() // async request


// request.addEventListener('load', function() {
//     // JSON.parse takes in a valid JSON string and returns an object
//     const result = JSON.parse(this.responseText)
//     const movies = result.Search
// })



// request.open('GET', 'URL') //plug in actual URL

// request.send()


https://cat-fact.herokuapp.com/facts

const catsUL = document.getElementById('catsUL')

// creating an object of type XMLHTTPRequest 
let request = new XMLHttpRequest() 

request.addEventListener('load', function() {
    const cats = JSON.parse(this.responseText)
    console.log(cats) // cats is an array of objects 
    const catFacts = cats.map((cat) => {
        return `<li>
             ${cat.text}
        </li>
        `
    }) 
    console.log(catFacts)
    catsUL.innerHTML = catFacts.join('')
})
request.open('GET', 'https://cat-fact.herokuapp.com/facts')
request.send()










const titleTextBox = document.getElementById('titleTextBox')
const priceTextBox = document.getElementById('priceTextBox')
const descriptionTextBox = document.getElementById('descriptionTextBox')
const categoryIdTextBox = document.getElementById('categoryIdTextBox')
const imageTextBox = document.getElementById('imageTextBox')
const saveProductButton = document.getElementById('saveProductButton')

saveProductButton.addEventListener('click', () => {

    const request = new XMLHttpRequest()
    request.open('POST', 'https://api.escuelajs.co/api.v1/products/')

    //body/content of the request
    const body = {
        title: titleTextBox.value,
        price: parseFloat(priceTextBox.value),
        description: descriptionTextBox.value,
        categoryId: parseInt(categoryIdTextBox.value),
        images: [imageTextBox.value]
    }

    // telling the server to the request is of type JSON
    request.setRequestHeader('Content-type', 'application/json')

    request.send(body)

})









// const dawgList = document.getElementById("dawgList")


// let request = new XMLHttpRequest()


// request.addEventListener('load', function() {
//     const result = JSON.parse(this.responseText)
//     const dogItems = result.map((dogs) => {
//         return `
//         <li>${dogs.fact}</li>
//         `
//     }) 
//     dawgList.innerHTML = dogItems.join("")

// })

// request.open('GET', 'https://island-bramble.glitch.me/dog-facts')

// request.send()


// const dawgButton = document.getElementById("dawgButton")
// const dawgDisplay = document.getElementById("dawgDisplay")












// dawgButton.addEventListener('click', () => {
//     getDogInfo(displayDogInfo)
// })

// function getDogInfo() {

//     const request = new XMLHttpRequest();
//     request.addEventListener('load', function() {
//         const result = JSON.parse(this.responseText)
//     })

//     request.open('GET', 'https://dog.ceo/api/breeds/image/random')
//     request.send()

// }

// function dislpayDogInfo(dogInfo) {
//     dawgDisplay.setAttribute('src', dogInfo.message)
// }



