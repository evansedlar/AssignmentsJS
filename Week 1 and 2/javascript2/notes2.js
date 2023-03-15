





//ACTIVITY 1

// let firstName = prompt('Enter you first name: ')
// let lastName = prompt('Enter your last name: ')

// let user = {lastName, firstName}

// console.log(`My name is ${user.lastName}, ${user.firstName}`)





//Activity 2

// let personalInfo = {firstName: 'Evan', lastName: 'Sedlar', addresses: [
//     {
        
//             street: '754 Argonne Street',
//             city: 'Newark',
//             state: 'DE',
//             zipCode: '78550'
//     },
//     {
//             street: '2377 Willis Avenue',
//             city:'Live Oak',
//             state:'FL',
//             zipCode:'32064'
//     }
   
// ]
// }

// console.log(personalInfo.addresses)











// Objects

//Attributes and  properties are the same thing

let carsNotes = []

let car = { make: 'Honda', model: 'Accord', year: 2010, hasTurbo: false
}

let anotherCar = { make: 'Toyota', model: 'Camry', year: 2023, hasTurbo: True
}

console.log(car)  //will show exactly as it is in the code

console.log(car.make)   //will show specifically the make
console.log(car.model)  //will show specifically the model
console.log(car.vin)    // undefined

car.hasTurbo = true  //changes the turbo from false to true

//Tweet attributes/properties

let tweet = {username: '@rainmaker1973', text: 'some text of tweet', imageUrl: 'some value', isVerified: true, likes: 3480, rts: 413,
noOfComments: 43
}

push.carsNotes(car, anotherCar)






//Nested Objects

let john = { id: '123', name: 'John' }
let mary = { id: '345', name: 'Mary' }

//creating an array called students and initializing with two students

let students = [john, mary]

// // what is the data type of student below
let student = students[0] //object. this is dependant on what is in the array

// // loop through an array and print all students
for(let index = 0; index < students.length; index++) {
    person = students[index]
}

// //objects are refernce types

let person = students[0]

person.name = 'Steven' //changing attribute within the object

let customer = { customerId: '123', name: 'John Doe', addresses: [
    {
        street: '1200 Richmond',
        state: 'TX',
        zipCode: '55678'
    },
    {
        street:'4567 Richmond',
        state: 'TX',
        zipCode: '22233'
    }
]
}

console.log(customer.addresses) //printing out a specific piece of information

for(let index = 0; index <customer.addresses.length; index++) {
    let address = customer.addresses[index]
    console.log(customer.addresses[index].street) //printing out a specifics within an array 
}


let cars = [] 

let chevy = { make: 'chevy', model: 'cobalt'}
let honda = { make: 'Honda', model: 'Accord'}

cars.push(chevy, honda)

console.log(cars)

for (let index = 0; index < cars.length; index++) {
    console.log(cars[index].make)
}

let names = ['Alex', 'Mary', 'John']

for (let index = 0; index < names.length; index++) {
  console.log(names[index]) //
}

let randomItems = ['Steven', 1, 5.6, { make: 'Honda', model: 'Accord'}]

randomItems[3]

let user = { name: 'John Doe', addresses: [{street: '123'}, {street: '456'}]}

// I need to loop through all the addresses of user object and print them out 

for (let i = 0; i < user.addresses.length; i++) {
  console.log(user.addresses[i].street);
}

let index = 0 
while(index < user.addresses.length) {
  console.log(user.addresses[index].street);
  index++
}
