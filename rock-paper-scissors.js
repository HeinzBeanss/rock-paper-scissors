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

function playerPlay() {
    let input = prompt("Please choose Rock, Paper, or Scissors!");
    newInput = input.toLowerCase();

        if (newInput == "paper") {
        return paper;
        } else if (newInput == "rock") {
        return rock;
        } else if (newInput == "scissors") {
        return scissors;
        } else { console.log("Please choose an appropriate option of Rock, Paper, or Scissors!")
        return playerPlay();
        }
}


function playRound(playerSelection, computerSelection) {

    if (computerScore >=3 || playerScore >= 3) {
        return
    }

    playerSelection = playerPlay();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        console.log("It's a draw, you both chose the same!");
        playRound();
    } else if (playerSelection == rock && computerSelection == paper) {
        console.log("You lose, Paper beats Rock!");
        computerScore++;
        console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
    } else if (playerSelection == rock && computerSelection == scissors) {
        console.log("You win, Rock beats Scissors!");
        playerScore++;
        console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
    } else if (playerSelection == paper && computerSelection == scissors) {
        console.log("You lose, Scissors beats Paper!");
        computerScore++;
        console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
    } else if (playerSelection == paper && computerSelection == rock) {
        console.log("You win, Paper beats Rock!");
        playerScore++;
        console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
    } else if (playerSelection == scissors && computerSelection == rock) {
        console.log("You lose, Rock beats Paper!");
        computerScore++;
        console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
    } else if (playerSelection == scissors && computerSelection == paper) {
        console.log("You won, Scissors beats Paper!");
        playerScore++;
        console.log("Player Score: " + playerScore + " Compter Score = " + computerScore);
    }
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

//     if (playerSelection === null) {
//  playerPlay();
// } THIS IS NOT A GOOD IDEA, AVOID BECAUSE AFTER 2 FAILED ATTEMPTS IT JUST CARRIES ON INSTEAD OF GOING BACK.

/* I have two issues to sort out and then it should be good to potentially improve:|
   The first issue is that after a failed attempt in the prompt, it restarts the function to get a successful input from the user, but whenever that happens and the next input after a fail is successful, it doesn't return the value for some reason, so the value is undefined. 
   Actually I think I've just finished this issue too, I'm a fucking beast. I had to return, then I wrote the function again, return playPlayer();

   Issue 2: How to deal with draws, I want it to ideally restart that round and go again, if at all possible. It works now but for whatever reason it repeats the score twice?? figure that out.
   Actually I think I just finished that nice. */