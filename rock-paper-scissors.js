
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

    if (playerScore >=3 || computerScore >=3) {
        const result = document.querySelector(".roundResult");
        result.textContent = "You already played best of 5, refresh the page to have another game!";
        return;
    }

    //playerSelection = playerPlay();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        const result = document.querySelector(".roundResult");
        result.textContent = "It's a draw, you both chose the same!";
        playRound();
    } else if (playerSelection == rock && computerSelection == paper) {
        const result = document.querySelector(".roundResult");
        result.textContent = "Computer chose Paper. You lose, Paper beats Rock!";
        images.setAttribute("src", "images/paper.jpg")
        computerScore++;
    } else if (playerSelection == rock && computerSelection == scissors) {
        const result = document.querySelector(".roundResult");
        result.textContent = "Computer chose Scissors. You win, Rock beats Scissors!";
        images.setAttribute("src", "images/rock.gif")
        playerScore++;
    } else if (playerSelection == paper && computerSelection == scissors) {
        const result = document.querySelector(".roundResult");
        result.textContent = "Computer chose Scissors. You lose, Scissors beats Paper!";
        images.setAttribute("src", "images/scissors.gif")
        computerScore++;
    } else if (playerSelection == paper && computerSelection == rock) {
        const result = document.querySelector(".roundResult");
        result.textContent = "Computer chose Rock. You win, Paper beats Rock!";
        images.setAttribute("src", "images/paper.jpg")
        playerScore++;

    } else if (playerSelection == scissors && computerSelection == rock) {
        const result = document.querySelector(".roundResult");
        result.textContent = "Computer chose Rock. You lose, Rock beats Scissors!";
        images.setAttribute("src", "images/rock.gif")
        computerScore++;
    } else if (playerSelection == scissors && computerSelection == paper) {
        const result = document.querySelector(".roundResult");
        result.textContent = "Computer chose Paper. You won, Scissors beats Paper!";
        images.setAttribute("src", "images/scissors.gif")
        playerScore++;
    }

    const gameResults = document.querySelector(".gameResults");
    gameResults.textContent = "Player Score: " + playerScore + " Compter Score = " + computerScore;

    if (playerScore >=3) {
        const gameConclusion = document.querySelector(".gameConclusion");
        gameConclusion.textContent = "You won the best of 5, congratulations!"
        images.setAttribute("src", "images/win.gif")
       
    } else if (computerScore >=3) {
        const gameConclusion = document.querySelector(".gameConclusion");
        gameConclusion.textContent = "You lose the best of 5, that's unlucky..."
        images.setAttribute("src", "images/lose.gif")
        
    }
}

const mainContent = document.querySelector(".content");

const images = document.createElement("img");
images.classList.add("images");
images.setAttribute("src", "images/before.gif")

mainContent.prepend(images);



const buttons = document.querySelectorAll("button");
buttons.forEach((button) => { 
    button.addEventListener("click", function (e) {
    playRound(button.id, );
    // button.classList.add("selected"); only use if I can get it to get off after the next click.
    })
    });

/* const buttonSelected = document.querySelectorAll("button");
buttons.forEach((button) => { 
    button.addEventListener("transitionend", removeTransition)
});

function removeTransition(e) {
    console.log(e)
} */
  
    

// also add another class also in css for last-selected, and it could highlight the border of 
// which button the user selected. that would have to be edited in the js of the button click, 
// maybe refer back to the video.
// also maybe add a background.