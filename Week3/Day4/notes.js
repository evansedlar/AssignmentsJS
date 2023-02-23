const counterHeading = document.getElementById('counterHeading')




function startIncrementing(callback) {

    let counter = 10

    setInterval(function() {
        counter++
        callback(counter)
        
    }, 2000)

    //return counter // this will not work and it will always return 0

}

startIncrementing(function (count) {
    console.log(count)

})


const counterHeading = document.getElementById('counterHeading')


function greet(callback) {
    callback() 
}

greet(function() {
    console.log("Greet Callback function")
}) 


function add(a, b,c, d) {
    let result = a + b 
    c() 
    return result 
}

let result = add(2,4, function() {
    console.log('Function is fired')
}, function(a,b) {
    console.log(a, b)
})

function display() {

}

function startIncrementing(callback) {
    
    let counter = 0

    setInterval(function () {
        counter++
        callback(counter)
        console.log('Counter Inside the setInterval')
        console.log(counter)
    }, 2000)

    //return counter // This will NOT work and it will always return 0 

}


startIncrementing(function(count) {
    console.log('Counter value outside the setInterval')
    console.log(count)
})  

// do something with updatedCounterValue 
//displayCounter(updatedCounterValue)

function displayCounter(counter) {
    console.log(counter)
}

console.log(updatedCounterValue * 100) // dummy code 


// I need the counter value out side the function 
// ??

//  counterValue + 100 


