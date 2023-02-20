// CLASSES 

// Class represents a blue print

// Car (Class = Blueprint)
// -make 
// -model
// -vin 

// when you use a blueprint to create an actual concrete car that is known as an object



// House (Class)
// -sq feet 
// -no of stories 
// -no of bed rooms 
// -no of bath rooms

class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
}

let myCar = new Car() // creating an object of Car class, new is telling you that you are creating an object
console.log(myCar)
console.log(myCar.make, myCar.model) //print out specifics within a class

let car2 = new Car('Honda', 'Accord')

class Table {

    constructor(width, height, material) {
        this.width = width
        this.height = height
        this.material = material
    }

}

//creating an object/instance of a Table
let cherryWoodTable = new Table(100, 100, 'Wood')
console.log(cherryWoodTable)
console.log(cherryWoodTable.width)

let platicTable = new Table(20, 20, 'Plastic')
console.log(plasticTable)

//changing attributes in a class
cherryWoodTable.width = 99
console.log(cherryWoodTable)






// A company can hace many employees
// we need a class for compamy and a class for employees

class Company {
    constructor(name) {
        //this means that the property will be available to the objects of type company
        this.name = name
        this.employees = [] 
    }
}

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.hoursWorked = 0
        this.eligibleForBonus = false
    }

    work() {
        // increment hours worked by +8 hours
        this.hoursWorked += 8 

        if(this.hoursWorked >40) {
            this.eligibleForBonus = true
        }
    }


}

let company = new Company('HEB')
console.log(company.name)

let employee = new Employee('John', 'Doe')
employee.work() //Every time you call this function the work hours will be increased by 8

// add employee to the company
company.employees.push(employee)
console.log(company.name)

let newEmployee = new Employee('Steven', 'Doe')

//////////////////////////////////////////////////////////////////

//default parameters in a class ex. color grey

let cars = []

class Car {
    constructor(make, model, color = 'grey') {
        this.make = make
        this.model = model
        this.color = color
        this.speed = 0
    }

    drive() {
        this.speed += 10
    }

    getReading() {
        return 144
    }
}


let reading = car.getReading()

// adding class objects to an array 

let car = new Car('toyota', 'camry')
let anotherCar = new Car('honda', 'civic')

cars.push(car, anotherCar)

//iterate through the cars array and print their model name

for(let i = 0; i < car.length; i++) {
    console.log(`The car make is ${cars[i].make} and model is ${cars[i].model}`)
} //car make is honda and model is accord

//delete index = 1 from cars array

delete cars[1]

////////////////////////////////////////////////////////////////////////////////////////

//Array Helpers

// Write an app that will go through a list of numbers and multiply each number by 2 and put the result in a new array
//new array [2,4,6,8,10,12,14,16,18]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let doubledArray = []

for(let i = 0; i < numbers.length; i++) {
    doubledArray.push(numbers[i] * 2)
}






// map (array helper)
// map returns a brand new array without changing the existing array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.map(function(no) {  //no = the individial elements of the array
    return 'A' //you must return something from the map function
                // that something becomes part of the brand new array
})

let names = ['alex','mary','steven','johnathon']

let namesLengthArray = names.map(function(name) {  //will tell you the length of each string in the array
    return name.length
})





//Filter (Array Helper)

let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] //We want to create an array with only even numbers
        //filter will return either true/false. if filter returns true then that item is added to the final array. if returns false then that item is discarded (not added to the new array)

let evenNumbers = someNumbers.filter(function(no) {
    return no % 2 == 0        
})






//Find (array helper)

let customers = ['alex','mary','steven','johnathon']

customers.find(function(name) {
    name == 'steven'
})


let cars = [
    {make: 'Honda', model:'Accord', price: 20000},
    {make: 'Toyota', model:'Camry', price: 30000},
    {make: 'Tesla', model:'Model 3', price: 60000}
]

//find the car where the make is 'Honda'

let result = cars.find(function(car) {
    return car.make == 'Honda'
})

console.log(result)







////////////////////////////////////////////

