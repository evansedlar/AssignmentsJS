let firstNumber = prompt('Enter first number: ')

let firstInteger = parseInt(firstNumber)

let operand = prompt('+, -, *, /')

let secondNumber = prompt('Enter Second number')

let secondInteger = parseInt(secondNumber)

function add(a, b){
    let result = (a + b)
    console.log(result)
}

function subtract(a, b){
    let result = (a - b)
    console.log(result)
}

function multiply(a, b){
    let result = (a * b)
    console.log(result)
}

function divide(a, b){
    let result = (a / b)
    console.log(result)
}

if(operand == '+'){
    add(firstInteger, secondInteger)
}else if(operand == '-'){
    subtract(firstInteger, secondInteger)
}else if(operand == '*'){
    multiply(firstInteger, secondInteger)
}else if(operand == '/'){
    divide(firstInteger, secondInteger)
}else{
    console.log('You have entered the wrong operator')
}