// Day 15 of Javascript Challenge!
// This script toggles the visibility of a text element when a button is clicked.

const btn = document.getElementById("magicButton");
const box = document.getElementById("box");

btn .addEventListener("click", function() {
    box.classList.toggle("hidden");
})