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
// Score variables;
let humanScore = 0;
let computerScore = 0;

// Play one round Logic:
function playRound(humanChoice, computerChoice) {

    // Make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice= computerChoice.toLowerCase();

    // Check for a draw
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! Both chose ${humanChoice}.`);
    }

    // Check if the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }

    // Otherwise, the computer wins
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    // Display current scores
    console.log(`Score — Human: ${humanScore}, Computer: ${computerScore}`);
}

playRound(getHumanChoice(), getComputerChoice());