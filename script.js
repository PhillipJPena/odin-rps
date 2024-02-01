const CHOICES = ["rock", "paper", "scissors"];
let playerSelection = prompt("Choose rock, paper, or scissors");

// When called returns "Rock", "Paper", or "Scissors". Output is random
function getComputerChoice() {
  let randomize = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomize];
}

//Determine winner
function getOutcome(player, cpu) {}

// validate that player choose rock, paper or scissors
while (!CHOICES.includes(playerSelection)) {
  playerSelection = prompt("Choose must be rock, paper, or scissors");
}

console.log(getComputerChoice());
