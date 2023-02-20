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

