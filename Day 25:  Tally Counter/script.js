// Day 25 of Javascript Challenge!
// Tally Counter

let count = 0; // Count starts at zero

document.getElementById("dotPin").onclick = function() {
    count = count + 1; // Count increases by one every click
    document.getElementById("display").textContent = count; // Display the count
}