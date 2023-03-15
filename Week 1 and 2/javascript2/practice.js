//Write a program that iterates over an array of numbers and outputs the sum of all the numbers in the array.

// let numbers = [1, 2, 3, 4, 5]

// let sum = 1

// for(let index = 0; index < numbers.length; index++) {
//     sum = sum * numbers[index]
// }

// console.log(sum)


//////////////////////////////////////////////

//Write a program that iterates over an array of strings and outputs the length of each string.

// let fruits = ['apple', 'pear', 'banana', 'lemon']

// for(let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index].length)
// }


/////////////////////////////////////////////////

//Write a program that iterates over an array of numbers and outputs the the largest number in the array

// let numbers = [1,22,7,500,3,12]

// let largest = numbers[0]

// for(let index = 1; index < numbers.length; index++){
//     if(numbers[index] > largest) {
//         largest = numbers[index]
//     }

// }
// console.log(largest)
   
////////////////////////////////////////////////////////////




class BankAccount {
    constructor(owner) {
        this.balance = 0;
        this.owner = owner;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    transferFunds(amount, transferAccount) {
        this.balance -= amount;
        transferAccount.balance += amount;
    }
}

let Chase = new BankAccount
let FrontWave = new BankAccount

Chase.deposit(200)

Chase.transferFunds(50, FrontWave)


