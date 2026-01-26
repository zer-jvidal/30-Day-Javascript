// Part of Day 20 Challenge. While Loop

let counter = 1;
while (counter <= 21) {
    let randomNum = Math.floor(Math.random() * 20) + 1;
    console.log(randomNum);
    counter++; // ++ Important: It will the stop the loop when 21-randoms are generated.
}

// End of Day 20.