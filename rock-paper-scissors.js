let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() { 
    // outputs a random number between 1-3.
    randomnum = Math.floor(Math.random()*3) + 1;
    // an if statement allocating each random number to either rock, paper or scissors. 
        if (randomnum === 1) {
         return rock; 
        } else if (randomnum === 2) {
            return paper;
        } else {
            return scissors;
        }
}   

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Please choose Rock, Paper, or Scissors!");
    playerSelection = playerSelection.toLowerCase();
  
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        console.log("It's a draw, you both chose the same!");
    } else if (playerSelection == rock && computerSelection == paper) {
        console.log("You lose, Paper beats Rock!");
        computerScore++;
    } else if (playerSelection == rock && computerSelection == scissors) {
        console.log("You win, Rock beats Scissors!");
        playerScore++;
    } else if (playerSelection == paper && computerSelection == scissors) {
        console.log("You lose, Scissors beats Paper!");
        computerScore++;
    } else if (playerSelection == paper && computerSelection == rock) {
        console.log("You win, Paper beats Rock!");
        playerScore++;
    } else if (playerSelection == scissors && computerSelection == rock) {
        console.log("You lose, Rock beats Paper!");
        computerScore++;
    } else if (playerSelection == scissors && computerSelection == paper) {
        console.log("You won, Scissors beats Paper!");
        playerScore++;
    }
    console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
}

function game() {

    for (i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

     if (playerScore > computerScore) {
         return "You won the best of 5, congratulations!"
     } else if (computerScore > playerScore) {
         return "You lose the best of 5, that's unlucky..."
     }

}

console.log(game());

// console.log("You both chose the same, replay this round!");
// playRound(playerSelection, computerSelection);


//   if (playerSelection !== rock || playerSelection !== scissors || playerSelection !== paper) {
        // }

