// Final Challenge of JavaScript

// 1. Selecting the DOM elements
const addButton = document.getElementById("btn");
const todoList = document.getElementById("list");

//Defining the function to run on the button click
function AddTodoItem() {

    // Collect user input using prompt ()
    const newItemText = prompt("Enter a new to-do-item:");
    
    // If the user presses cancel or enters an empty string, the function will return nothing.
    if (newItemText == null || newItemText.trim() === "") {
        return;
    }

    // Create a new list item and add it to the list
    // Used the trim content from the user
    const newListItem = document.createElement("li");
    newListItem.textContent = newItemText;
    // Append the new element to the <ul> element
    todoList.appendChild(newListItem);
}
// When the 'addButton' is clicked, the 'addTodoItem' function is called.
addButton.addEventListener("click", AddTodoItem);