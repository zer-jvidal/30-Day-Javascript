// Day 23 of Javascript Challenge!
// DOM : Creating Elements

// Selecting the <ul> Element - Where the new items will be added
const list = document.getElementById("myList");

// Creating new <li> Element/s to be added.
const newThings = document.createElement("li");
const newItems = document.createElement("li");

// Adding text inside the <li> Element
newThings.textContent = "A brand new items for the List!";
newItems.textContent = "A new set of items for the List!";

// Attach the <li> element to the <ul> element - VERY IMPORTANT - Without this, the <li> element will not be added to the list.
list.appendChild(newThings);
list.appendChild(newItems);