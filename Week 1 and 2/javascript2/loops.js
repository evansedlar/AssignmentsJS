//let names =['Joe', 'Bob', 'Kim', 'Tim', 'Jim']

//for(let index = 0; index < names.length; index++) {
    //console.log(names[index])
//}

//for(let index = names.length - 1; index >= 0; index--) {
    //console.log(names[index])
//}

// let friends = []

// while(true) {
//     let friendsNames = prompt('Enter Name: ')
//     friends.push(friendsNames)

//     let choice = prompt('Enter q to quit or any key to continue')

//     if(choice == 'q') {
//         break
//     }
// }

// console.log(friends)






// let num = parseInt(prompt('Enter number to be factorialized: '))


// function factorialize(num) {
//     var result = num;
//     if(num == 0 || num == 1)
//         return 1;
//     while (num > 1) {
//         num--;
//         result = result * num;
//     }
//     return result;
// }
// console.log(factorialize(num))






// let word = prompt('Enter suspected palindrome: ')

// function checkPalindrome(word) {
//     const len = word.length;

//     for (let index = 0; index < len / 2; index++) {
//         if(word[index] !== word[len - 1 - index]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const value = checkPalindrome(word);

// console.log(value);





const num = parseInt(prompt('Enter suspected prime number: '));
let isPrime = true;

if (num === 1) {

    console.log('1 is neither prime nor composite')

}else if (num > 1) {
    
    for (let index = 2; index < num; index++) {
        
        if (num % index == 0) {
            
            isPrime = false;
            break;

        }

    }

    if (isPrime) {

        console.log(`${num} is a prime number`);

    } else {
        console.log(`${num} is not a prime number`);
    }

}



