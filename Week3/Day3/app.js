

// function greet() {
//     console.log('HELLO')
// }



//setTimeout
// milliseconds 5000 = 5 seconds
// setTimeout is called only once and then it is cancelled

// window.setTimeout(greet, 5000)

// setInterval
// setInterval is called repeatedly

// let counter = 0

// let intervalID = window.setInterval(function () {
//     counter++
//     console.log(counter)
//     if(counter >= 10) {
//         // stop the interval
//         window.clearInterval(intervalID)
//     }
// }, 2000)


const startButton = document.getElementById('startButton')
const countdownNumber = document.getElementById('countdownNumber')
const numberTextBox = document.getElementById('numberTextBox')


let timer = parseInt(numberTextBox.value)

startButton.addEventListener('click', function () {
    let intervalID = window.setInterval(function() {
        timer--
        console.log(timer)
        if(timer < 0) {
            window.clearInterval(intervalID)
        } else {
            countdownNumber.innerHTML = timer
        }
    }, 1000)
})
