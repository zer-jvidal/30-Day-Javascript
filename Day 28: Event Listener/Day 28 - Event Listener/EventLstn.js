// Day 28 of Javascript Challenge
// Simple Event Listener

// Selecting the Elements on the HTML

const image = document.getElementById("kazuha");
const button = document.getElementById("btn");

// Adding the Event Listener

button.addEventListener("click", () => {
    // Changes the 'src' attribute of the image
    image.src = "./kaz1.jpg";
    // Changes the 'alt' attribute of the image
    image.alt = "Kazuha";
})