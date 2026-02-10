console.log("Hello World")

function getComputerChoice() {
    let randomNumber = Math.random;

    let result;

    if(randomNumber <= 0.333) {
        result = "Rock";
    } else if(randomNumber >= 0.667) {
        result = "Scissors";
    } else {
        result = "Paper";
    }

    return result;
    }

    console.log(getComputerChoice);
//Generate random number from 0 to 1//

//IF RN is less than or equal to 0.333, assign value "rock"//

//IF RN greater than or equal to 0.667, assign value "scissors"//

//ELSE, assign value "Paper"//

