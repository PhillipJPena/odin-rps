const CHOICES = ["rock", "paper", "scissors"];
let playerSelection = prompt("Choose rock, paper, or scissors");
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

// validate that player choose rock, paper or scissors
while (!CHOICES.includes(playerSelection)) {
  playerSelection = prompt("Choose must be rock, paper, or scissors");
}

console.log(playerSelection);
console.log(computerSelection);
console.log(getOutcome(playerSelection, computerSelection));
