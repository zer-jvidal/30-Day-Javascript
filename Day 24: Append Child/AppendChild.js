// Day 24 of Javascript!
// DOM : Append Child.

// 1. Selecting the <ul> where the item will be added.
const list = document.getElementById("myList");

// 2. Creating a new <li> element
const firstBorn = document.createElement("li");
const secondBorn = document.createElement("li");
const lastBorn = document.createElement("li");
const darkHorse = document.createElement("li");

// 3. Adding text inside the <li> element
firstBorn.textContent = "Behold, I'm the eldest. Therefore, I'm the strongest."; // First Born : Bold Behavior
secondBorn.textContent = "I'm the second-born. Hello there, Nice to meet you."; // Second Born : The Stable One
lastBorn.textContent = "I'm the last born. I'm the Favored One. Unrivaled. Unmatched."; // Last Born : The Cheekiest One
darkHorse.textContent = "I'm the dark horse. I'm the unexpected one."; // Dark Horse : The Unexpected One

// 4. Attaching/Append the <li> element to the <ul> element
list.appendChild(firstBorn);
list.appendChild(secondBorn);
list.appendChild(lastBorn);
list.appendChild(darkHorse);
