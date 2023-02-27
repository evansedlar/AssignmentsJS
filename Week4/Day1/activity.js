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


const dawgButton = document.getElementById("dawgButton")
const dawgDisplay = document.getElementById("dawgDisplay")





dawgButton.addEventListener('click', () => {
    getDogInfo(displayDogInfo)
})

function getDogInfo() {

    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
    })

    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.send()

}

function dislpayDogInfo(dogInfo) {
    dawgDisplay.setAttribute('src', dogInfo.message)
}