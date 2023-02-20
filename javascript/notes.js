
// VARIABLES 
// Data Types
let age = 10 //Integer (numbers)
let name = 'John' // String
let pi = 3.142 //Double
let isPublished = true //Boolean
let address = '2300 Richmond Ave Houston, TX'

// JavaScript uses camel casing
// customerList

console.log(age)
console.log(name, pi, isPublished, address)

//Strings are immutable
//Immutable means they cannot be changed

let studentName = 'John Doe'
let studentCohort = 'DigitalCrafts'
let year = '2023'

// Strings when added together are concatenated together
//let welcomeMessage = studentName + studentCohort + year
console.log(welcomeMessage)

//Hello John Doe, Welcome to DigitalCrafts cohort 2023

let welcomeMessage = 'Hello ' + studentName + ', ' +  'Welcome to ' + studentCohort + ' cohort ' + year

//TEMPLATE LITERALS

let anotherWelcomeMessage = `Hello ${studentName}, Welcome to ${studentCohort} for the year ${year}`

//PROMPTS
//The prompt function always returns a string
let firstName = prompt('Enter first name: ')
let lastName = prompt('Enter last name: ')
let myAge = prompt('Enter Age: ')
console.log(perseInt(myAge) + 10)

// CONDITIONS
// >= greater than or equal to
// > greater than
// < less than
// <= less than or equal to
// == equal to
// && and
// || or
let userAge = 21
let resident = 'TX'

// userAge must be greater than 18 and resident of TX
// both conditions need to match for the if body to get executed

if(userAge > 18 && resident == 'TX') {
    console.log('User is greater than 18.')
} else if (resident == 'CO'){
    'You are a resident of Colorado'
} else {
    console.log('you are not greater than 18')
}

// FUNCTIONS

// lines of code that serve a common purpose

// Functions are small and they are doing one job only

console.log('----------------')
console.log('-----REPORT-----')
console.log('----------------')

function displayReport() {

    console.log('----------------')
    console.log('-----REPORT-----')
    console.log('----------------')

}

function displayWeeklyReport(name){
    console.log('----------------')
    console.log('-----REPORT-----')
    console.log('----------------')
}

function add(a, b) {
    let result = a + b
    return result
    // These lines are not executed
}

let result = add(2,3)
console.log(result)

// A function to find out if a number is even or odd

//evenOrOdd --> 'EVEN OR ODD

function isEven(no){
    // write code to check whether number is even or not
    // return true or false
}

//deposit money into the bank account

function deposit(amount){

}

// I want to find out is a particular user is an employee or not

function isEmployee(userId) {
    //return true/false
}

function getTransmissionFluid(make, model) {
    
}

function performCarService(make, model) {
    let transmissionFluid = getTransmissionFluid(make, model)
}

// EVEN

let number = 6

if(number % 2 == 0) {
    console.log('EVEN')
} else {
    console.log('ODD')
}

function isEven(no) {
    if (number %2 == 0) {
        return true
    }

    return false
} 

console.log(isEven(10))

function fizzBuzz(no){
    if(no %3 == 0 && no % 5 == 0) {
        return 'FIZZBUZZ'
    } else if(no % 3 == 0) {
        return 'FIZZ'
    } else if(no % 5 == 0) {
        return 'BUZZ'
    }
}

//ARRAYS
//Variable names use plural.
let names = ['John', 'Alex', 'Mary', 'Steven']

let numbers = [1,2,3,4,5,6]

let items = ['John', 'Alex', 12, true, 4.56]

//Accessing items of the array
//Arrays start with 0

console.log(numbers[0]) //1

//Add to the array
numbers.push(7)

//empty array
let animals = []

animals.push('Cat')
animals.push('Dog')
animals.push('Rabbit')

//Iterate through the array
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

//LOOPS
//for(start of the loop, condition, how the loop increments)

for(let index = 0; index < 3; index++) { //0, 1, 2
    console.log(index)
}

for(let index = 0; index < 3; index++) { //Cat, Cat, Cat
    console.log(animals[0]) 
}

for(let index = 0; index < 3; index++) { //Cat, Dog, Rabbit
    console.log(animals[index])
}

console.log(animals.length) //gives you length of the array

for(let index = 0; index < animals.length; index++) { //gives you the full list printed out even if you add items to the list
    console.log(animals[index])
}

//Reverse Loop
for(let index = names.length - 1; index >= 0; index--) {
    console.log(names[index])
}

//adding the array up

let sum = 0

for(let index = 0; index < numbers.length; index++){
    sum = sum + numbers[index]
    //sum += numbers[index]
}

//factorializing using a for loop
let no = 5
let factorial = 1
for(let index = 1; index <= no; index++) {
    factorial = index * factorial
}

//Insert item at particular position

let friends = ['John', 'Mary', 'Steven']

//Adds it to the end of the array
//friends.push('Hank')

friends.splice(0, 0, 'Hank')

//Deleting items from friends array

delete friends[2]

//Delete using splice
friends.splice(0,0)

//POP last item of an array
friends.pop()

//While loop
let counter = 1
while(counter < 10) {
    console.log(counter)
    counter++
}

let health = 100
while(health > 0) {
    //run the game
    health-=1 //health-- // decrement health
}

//Taking input and adding it to an array

let todos = []

while(true){ //Loop begins

    let todoItem = prompt('Enter todo item: ')
    todos.push(todoItem)

    let choice = prompt('Enter q to quit or any key to continue')

    if(choice == 'q') {
        //break the loop
        break
    }

} //Loops ends






