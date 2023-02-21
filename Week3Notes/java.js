// let helloHeading = document.getElementById('helloHeading')

// let firstNameTextBox = document.getElementById('firstNameTextBox')

// let lastNameTextBox = document.getElementById('lastNameTextBox')

// let submitButton = document.getElementById('submitButton')

// submitButton.addEventListener('click', function() {
//     helloHeading.innerHTML = `${firstNameTextBox.value}, ${lastNameTextBox.value}`
// })


/////////////////////////////////////////////////////////////////////////////////////////////


// let redButton = document.getElementById("redButton")

// let blueButton = document.getElementById("blueButton")

// redButton.addEventListener("click", function() {
//     document.body.style.background = "red"
// })
// blueButton.addEventListener("click", function() {
//     document.body.style.background = "blue"
// })



////////////////////////////////////////////////////////////////////////////


let randomImageButton = document.getElementById('randomImageButton')
randomImageButton.addEventListener('click', function() {
    
    //create an image element
    let img = document.createElement('img')

    // add src attribute to the image
    img.setAttribute('src', 'https://picsum.photos/200/300')

    //create a button
    let btn = document.createElement('button')
    btn.innerHTML = 'Mark as favorite'

    //add event listener to the btn
    btn.addEventListener('click', function() {
        alert('Thank you!')
    })

    // appendChild is going to add an HTML element to another HTML element
    document.body.appendChild(img)

})