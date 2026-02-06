// Day 27 of Javascript Challenge
// Function Scope

function hideThings() {
    let secretThings = "Steam Deck"; // Defining a variable inside a function
    console.log(secretThings); // Accessing the variable inside the function
}

hideThings();

console.log(secretThings); // This will throw an error.
