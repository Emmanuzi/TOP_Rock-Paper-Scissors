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


// Full game: Play 5 round Logic.

function playGame(){
    // Human Logic: Function to prompt and return user input.

    function getHumanChoice() {
        let humanChoice = prompt("Choose Rock, Paper or Scissors:");

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock") {
            return "rock";
        }
        else if (humanChoice === "paper") {
            return "paper";
        }
        else if (humanChoice === "scissors") {
            return "scissors";
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

    for (let round = 1; round <= 5; round++ ){
        console.log("Round: " + round)

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game ended in a draw!");
    }

}

playGame();
