console.log("Hello World")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
console.log (getComputerChoice())
//Generate a random integer from 0 to 2
//IF RI is equal to 0, assign value "rock"
//IF RI equal to 1 assign value "scissors"
//ELSE, assign value "Paper"

function getHumanChoice() {
    return(prompt("Rock, paper, or scissors?").toLowerCase());
}
console.log(getHumanChoice())
//Prompt user to enter value, rock paper or scissors

let humanScore = 0
//Create variable humanScore
let computerScore = 0
//Create variable computerScore
console.log (humanScore)
console.log (computerScore)

let humanchoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound() {
if (humanchoice == computerChoice) {
    return ("Tie!");
}
else if ((humanchoice == "rock") && (computerChoice == "scissors")) {
    return ("Hooman wins!");
    humanScore++;
}
else if ((humanchoice== "paper") && (computerChoice == "rock")) {
    return ("Hooman wins!");
    humanScore++;
}
else if ((humanchoice == "scissors") && (computerChoice == "paper")) {
    return ("Hooman wins!");
    humanScore++;
}
else if ((computerChoice == "rock") && (humanchoice == "scissors")) {
    return ("Compooter wins!");
    computerScore++;
}
else if ((computerChoice == "paper") && (humanchoice == "rock")) {
    return ("Compooter wins!");
    computerScore++;
}
else if ((computerChoice == "scissors") && (humanchoice == "paper")) {
    return ("Compooter wins!");
    computerScore++;
}}
console.log (playRound());
console.log ("Human Score: " + humanScore);
console.log ("Computer Score: " + computerScore);