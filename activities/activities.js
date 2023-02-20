
//activity 0:

// class Table{
//     constructor(height, width, material){
//         this.height = height
//         this.width = width
//         this.material = material
//     }
// }

// let sandleWoodTable = new Table(36, 48, 'Sandlewood')

// let hardWoodTable = new Table(40, 50, 'Hardwood')

// console.log()




//ChatGPT question for later: write 10 practice exercises without answers for classes and objects in JavaScript.



//activity 1:

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.addresses = []
//     }
// }

// class Address {
//     constructor(street, city, state, zip) {
//         this.street = street
//         this.city = city
//         this.state = state
//         this.zip = zip
//     }
// }


// let user1 = new User('Evan', 'Sedlar')

// let address1 = new Address('15 White Fawn Dr.', 'The Woodlands', 'TX', '77381')

// user1.addresses.push(address1)

// for(let index = 0; index < user1.addresses.length; index++) {
//     console.log(user1.addresses[index])
// }






//Activity 2:

//"this." is a place holder for the parameters set 


// class BankAccount {
//     constructor(accountNumber) {
//         this.balance = 0
//         this.accountNumber = accountNumber
//     }

//     deposit(amount) {
//         this.balance += amount
//     }

//     withdraw(amount) {
//         this.balance -= amount
//     }

//     transferFunds(amount, account1) {
//         this.balance -= amount
//         account1.balance += amount
//     }
// }


// let Chase = new BankAccount(12345)
// console.log(Chase)

// Chase.deposit(25)

// console.log(Chase)

// let frontWave = new BankAccount(45678)

// Chase.transferFunds(5, frontWave) //transfer from one bank account to another

// console.log(Chase)
// console.log(frontWave)







//Assignment:

// let storeLists = []

// class Store {
//     constructor(storeName) {
//         this.storeName = storeName
//         this.shoppingLists = []
//     }

//     addList(storeName, listItem) {
//         storeName.shoppingLists.push(listItem)
//     }

// }


// while(true) {
//     let choice = prompt('Enter 1 to create a new list, 3 to view your lists, or q to quit: ')

//     if(choice == 'q') {
//         break
//     }

//     if(choice == '1') {
//         let storeName = new Store (prompt('Enter the name of the store you wish to start your list on: '))
//         storeLists.push(storeName)
//         while(true) {
//             let listItem = prompt('Enter the name of the item you wish to shop for: ')
        
//             if(listItem == 'q') {
//                 break
//             } else {
//                 storeName.addList(storeName, listItem)
//             }
//     }
// }


//     else if(choice == '3') {
//         console.log(storeLists)
//     }
// }




//ChatGPT Activity 1:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let doubledArray = numbers.map(function(no) {
//     return no * 2
// })

// console.log(doubledArray)




//ChatGPT Activity 2:

// let customers = ['alex','mary','steven','johnathon']

// let capitalCustomers = customers.map(function(customer) {
//     return customer.toUpperCase()
// })

// console.log(capitalCustomers)




//ChatGPT Activity 3:

// let things = [
//     {name: 'Box', size: 'medium'},
//     {name: 'Wallet', size: 'small'},
//     {name: 'House', size: 'big'}
// ]

// let newThings = things.map(function(thing) {
//     return thing.name
// })
// console.log(newThings)





//ChatGPT Actvity 4:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let evenNumbers = numbers.filter(function(no) {
//     return no % 2 == 0
// })

// console.log(evenNumbers)




//ChatGPT Activity 5: 

// let customers = ['alex','mary','steven','johnathon']

// let newCustomers = customers.filter(function(customer) {
//     return customer.length > 5
// })

// console.log(newCustomers)




//ChatGPT Activity 6:

// let friends = [
//     {name: 'Joe', age: 21},
//     {name: 'Bob', age: 10},
//     {name: 'Tim', age: 44}
// ]

// let legalFriends = friends.filter(function(friend) {
//     return friend.age > 18
// })

// console.log(legalFriends)





//ChatGPT Activity 7:

// let friends = [
//     {name: 'Joe', age: 21},
//     {name: 'Bob', age: 10},
//     {name: 'Tim', age: 44}
// ]

// let lFriends = friends.filter(function(friend) {
//     return friend.age > 18
// })

// console.log(lFriends)

// let lUFriends = lFriends.map(function(lFriend) {
//     return lFriend.name.toUpperCase()
// })

// console.log(lUFriends)



////////////////////////////////////////////////////////////////////////////



//ChatGPT Map Activities 1-5: (Map)

//////////////////////////////// NUMBER 1 //////////////////////////////////


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let doubledNumbers = numbers.map(function(no) {
//     return no * 2
// })

// console.log(doubledNumbers)


//////////////////////////////// NUMBER 2 //////////////////////////////////


// let names = ['alex','mary','steven','johnathon']

// let uNames = names.map(function(name) {
//     return name.toUpperCase()
// })

// console.log(uNames)


//////////////////////////////// NUMBER 3 //////////////////////////////////


// let friends = [
//     {name: 'Joe', age: 21},
//     {name: 'Bob', age: 10},
//     {name: 'Tim', age: 44}
// ]

// let nameFriends = friends.map(function(friend) {
//     return friend.name
// })

// console.log(nameFriends)


//////////////////////////////// NUMBER 4 //////////////////////////////////


// let numbers = [1.7, 2.2, 3.7, 4.2, 5.7]

// let roundedNumbers = numbers.map(function(no) {
//     return Math.round(no)
// })

// console.log(roundedNumbers)


//////////////////////////////// NUMBER 5 //////////////////////////////////


// let friends = [
//     {name: 'Joe', age: 21},
//     {name: 'Bob', age: 10},
//     {name: 'Tim', age: 44}
// ]

// let lFriends = friends.filter(function(friend) {
//     return friend.age > 18
// })


// let ulFriends = lFriends.map(function(lfriend) {
//     return lfriend.name.toUpperCase()
// })

// console.log(ulFriends)


/////////////////////////////////////////////////////////////////////////////

//ChatGPT Questions 6-9 (Filter)

//////////////////////////////// NUMBER 6 //////////////////////////////////


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let evenNumbers = numbers.filter(function(no) {
//     return no % 2 == 0
// })

// console.log(evenNumbers)


//////////////////////////////// NUMBER 7 //////////////////////////////////


// let names = ['alex','mary','steven','johnathon']

// let longNames = names.filter(function(name) {
//     return name.length > 5
// })

// console.log(longNames)


//////////////////////////////// NUMBER 8 //////////////////////////////////


// let friends = [
//     {name: 'Joe', age: 21},
//     {name: 'Bob', age: 10},
//     {name: 'Tim', age: 44}
// ]

// let legalFriends = friends.filter(function(friend) {
//     return friend.age > 18
// })

// console.log(legalFriends)


//////////////////////////////// NUMBER 9 //////////////////////////////////


// let friends = [
//     {name: 'Joe', email: 'joe@gmail.com'},
//     {name: 'Bob', email: 'joe&gmail.com'},
//     {name: 'Tim', email: 'joe@gmail.com'}
// ]

// let validFriends = friends.filter(function(friend) {
//     return friend.email.includes('@') && friend.email.includes('.com')
// })

// console.log(validFriends)


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//ChatGPT Questions 10-12 (Find)

//////////////////////////////// NUMBER 10 //////////////////////////////////


// let numbers = [2, 3, 7, 5, 6, 10]

// let result = numbers.find(function(no) {
//     return no > 5
// })

// console.log(result)


//////////////////////////////// NUMBER 11 //////////////////////////////////


// let names = ['alex','mary','stevzen','johnathon']

// let result = names.find(function(name) {
//     return name.includes('z')
// })

// console.log(result)


//////////////////////////////// NUMBER 12 //////////////////////////////////


// let friends = [
//     {name: 'Joe', age: 15},
//     {name: 'Bob', age: 22},
//     {name: 'Tim', age: 44}
// ]

// let result = friends.find(function(friend) {
//     return friend.age > 21
// })

// console.log(result)


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//ChatGPT Questions 13-16 (Reduce)

//////////////////////////////// NUMBER 13 //////////////////////////////////


// let numbers = [2, 3, 7, 5, 6, 10]

// let newNumbers = numbers.reduce(function(xx, yy) {
//     return xx + yy
// })

// console.log(newNumbers)


//////////////////////////////// NUMBER 14 //////////////////////////////////


// let names = ['alex','mary','stevzen','johnathon']

// let newNames = names.reduce(function(xx, yy) {
//     return xx + yy
// })

// console.log(newNames)

//////////////////////////////// NUMBER 15 //////////////////////////////////
                //getting the average of ages in an array of objects//


// let friends = [
//     {name: 'Joe', age: 15},
//     {name: 'Bob', age: 22},
//     {name: 'Tim', age: 44}
// ]


// let ages = friends.map((friend) => (friend.age))


// let avgAges = (ages.reduce((xx, yy) => (xx + yy))  / friends.length)

// console.log(avgAges)



//////////////////////////////// NUMBER 16 //////////////////////////////////


// let numbers = [2, 3, 7, 5, 6, 10]

// let largestNum = numbers.reduce((xx, yy) => (Math.max(xx, yy)))

// console.log(largestNum)


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// ChatGPT Questions 17-20

//////////////////////////////// NUMBER 17 //////////////////////////////////


// let numbers = [2, 3, 7, 5, 6, 10]

// let evenNumbers = numbers.filter((no) => (no % 2 == 0))

// let doubledNumbers = evenNumbers.map((no) => (no * 2))

// console.log(doubledNumbers)


//////////////////////////////// NUMBER 18 //////////////////////////////////


// let friends = [
//     {name: 'Joe', age: 15},
//     {name: 'Bob', age: 22},
//     {name: 'Tim', age: 44}
// ]

// let newFriends = friends.filter((friend) => (friend.age > 18))

// let onlyFriends = newFriends.map((newFriend) => (newFriend.name))

// console.log(onlyFriends)


//////////////////////////////// NUMBER 19 //////////////////////////////////


// let names = ['alex','mary','stevzen','johnathon']

// let capNames = names.map((name) => (name.toUpperCase()))

// let newNames = capNames.reduce((xx, yy) => (xx + yy))

// console.log(newNames)


//////////////////////////////// NUMBER 20 //////////////////////////////////


// let numbers = [2, 3, 7, 5, 6, 10]

// let bigNumbers = numbers.filter((number) => (number > 5))

// let sumNumbers = bigNumbers.reduce((xx, yy) => (xx + yy))

// console.log(sumNumbers)

