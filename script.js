// query selector helper function
const $ = function (selector) {
    return document.querySelector(selector);
};

const playBtn = $("#play-btn");
const resetBtn = $("#reset");
const displayPlayerScore = $("#player-score");
const displayComputerScore = $("#computer-score");
const displayComputerSelection = $("#computer-selection");
const displayPlayerSelection = $("#player-selection");
const displayOutcome = $("#game-outcome");

const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// When called returns "Rock", "Paper", or "Scissors". Output is random
function getComputerChoice() {
    let randomize = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomize];
}

//Determine winner
function getOutcome(player, cpu) {
    if (player == cpu) {
        return "draw...";
    }
    if (player == "rock") {
        if (cpu == "paper") {
            computerScore++;
            return "You lose";
        }
        if (cpu == "scissors") {
            playerScore++;
            return "You win!";
        }
    }
    if (player == "paper") {
        if (cpu == "scissors") {
            computerScore++;
            return "You lose";
        }
        if (cpu == "rock") {
            playerScore++;
            return "You win!";
        }
    }
    if (player == "scissors") {
        if (cpu == "rock") {
            computerScore++;
            return "You lose";
        }
        if (cpu == "paper") {
            playerScore++;
            return "You win!";
        }
    }
}

//event listeners
playBtn.addEventListener("click", function (e) {
    let getSelection = $('input[name="rps"]:checked');
    let playerSelection = getSelection ? getSelection.id : "not available";
    let computerSelection = getComputerChoice();
    displayPlayerSelection.innerHTML = playerSelection;
    displayComputerSelection.innerHTML = computerSelection;
    displayOutcome.innerHTML = getOutcome(playerSelection, computerSelection);
    displayPlayerScore.innerHTML = playerScore;
    displayComputerScore.innerHTML = computerScore;
});

resetBtn.addEventListener("click", function (e) {
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.innerHTML = playerScore;
    displayComputerScore.innerHTML = computerScore;
    displayPlayerSelection.innerHTML = "";
    displayComputerSelection.innerHTML = "";
});
