// Day 5 : The If - Else (Let's make it interactive!)

const prompt = require('prompt-sync')(); //This imports the prompt-sync module to allow user input in the console.

let number = prompt("Enter a fvcking number: "); //The user inputs a string. Along with the instruction.

number = Number(number); // This converts the string to a number!

if (number > 21) {
    console.log("The number is so big! Shooot!")
} else {
    console.log("The number is small like the numbers of your hair.   Haha!")
}

