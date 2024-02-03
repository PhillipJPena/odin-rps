let playBtn = document.getElementById("play-btn");

const CHOICES = ["rock", "paper", "scissors"];
// let playerSelection = prompt("Choose rock, paper, or scissors");
let computerSelection = getComputerChoice();

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
      return "You lose";
    }
    if (cpu == "scissors") {
      return "You win";
    }
  }
  if (player == "paper") {
    if (cpu == "scissors") {
      return "You lose";
    }
    if (cpu == "rock") {
      return "You win";
    }
  }
  if (player == "scissors") {
    if (cpu == "rock") {
      return "You lose";
    }
    if (cpu == "paper") {
      return "You win";
    }
  }
}

//event listeners
playBtn.addEventListener("click", function (e) {
  console.log(e.target);
});
