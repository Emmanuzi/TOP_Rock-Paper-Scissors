// Testing the console
console.log("Hello World")

// Rock Paper Scissors game with the computer
// Computers Logic: Function to randomly pick between rock, paper and scissors.

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    }
    else if (computerChoice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// Calling the function
console.log("Computer:", getComputerChoice());

// Human Logic: Function to prompt and return user input.

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors:");

    if (humanChoice === "Rock") {
        return "Rock";
    }
    else if (humanChoice === "Paper") {
        return "Paper";
    }
    else if (humanChoice === "Scissors") {
        return "Scissors";
    }
    else {
        return "Invalid choice";
    }
}

// Calling the function
let humanSelection = getHumanChoice();

console.log("Human:", humanSelection);

