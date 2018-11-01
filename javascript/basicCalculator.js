//Prompts user to enter first and second number.
var firstNumber = prompt("What is the first number?");
var secondNumber = prompt("What is the second number?");

//Establishes mathematical operations and corresponding variables.
var sum = firstNumber + secondNumber
var subtract = firstNumber - secondNumber
var multiply = firstNumber * secondNumber
var divide = firstNumber / secondNumber
var option = prompt("Would you like to add, subtract, multiply, or divide?");

//If loops that correspond with the variables above.
if(option === "add"){
    alert("This is your answer: " + sum)
}

if(option === "subtract"){
    alert("This is your answer: " + subtract)
}

if(option === "multiply"){
    alert("This is your answer: " + multiply)
}

if(option === "divide"){
    alert("This is your answer: " + divide)
}