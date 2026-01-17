// Day 13: const vs let

// 1. let can change
let mood = "hungry";
console.log("Mood before:", mood);

mood = "hangry";
console.log("Mood after:", mood);

// 2. const cannot change (this will throw an error)
const favoriteDrink = "Iced Coffee";
console.log("Favorite Drink:", favoriteDrink);

// This line should break on purpose
favoriteDrink = "Milk Tea";
console.log("Updated Drink:", favoriteDrink);
