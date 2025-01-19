const process = require("process");

const validOptions = ["rock", "paper", "scissors"];
const arguements = process.argv.slice(2);
const userChoice = arguements[0];
const computerChoice = validOptions[Math.floor(Math.random() * validOptions.length)]

function determineWinner(playerInput, computerInput) {
  if (playerInput == computerInput) {
    return "Its a tie!";
  }

  if (
    (playerInput === "scissors" && computerInput === "paper") ||
    (playerInput === "rock" && computerInput === "scissors") ||
    (playerInput === "paper" && computerInput === "rock")
  ) {
    return "You Win!";
  }

  return "Computer wins!";
}

if (!validOptions.includes(userChoice)) {
  console.log("Usage: node index.js <rock|paper|scissors>");
  return;
}
console.log(`Your chopice was: ${userChoice}, the computer chose ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
