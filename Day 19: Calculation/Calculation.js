// Day 19 of Javascript Challenge!
// Making Calculator the -ish way. <3
// Let's get it!

// The Commands addition, subtraction and multiplication only. No division for now.

function basicCalc (operation, num1, num2) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "*") {
        return num1 * num2;
    } else {
        return "Invalid Transaction. Try Again.";
    }
}

// For the output

console.log(basicCalc("+", 1, 20)); // 21
console.log(basicCalc("*", 1, 21)); // 21
console.log(basicCalc("-", 22, 1)); // 21 

// Why 21? That's my lucky number. :3 
// End of Day 19 Challenge! 