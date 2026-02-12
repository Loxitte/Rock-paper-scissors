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

