let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
    guess = prompt("Please input your guess. Choose from 0 to 6")
    if (guess < 0 || guess > 6 || isNaN(guess)) {
        alert("Please enter a valid cell number!")
    } else {
        guesses++
    
        if (guess == location1||guess == location2||guess == location3) {
            alert("HIT!!!")
            hits++
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else {
            alert("MISS!!!")
        }
    }
}

let stats = "You took " + guesses + " guesses to sinkthe battleship, " +
            "which means your shooting accuracy was " + (3/guesses);
alert(stats)