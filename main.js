let userSelection = prompt ("What's your winner hand today?")
console.log(userSelection)

let computerSelection = getComputerChoice ();
console.log(computerSelection)

function getComputerChoice () {
    let hands = ["Rock", "Paper", "Scissors"]
    let computerSelection = hands [Math.floor(Math.random() * hands.length)];
    // I don't really understand why this Math.floor and Math.random works. But it does.
    return computerSelection;
}

let roundWinner = getRoundWinner ();
console.log(roundWinner)

function getRoundWinner () {
    if (userSelection == "Rock" && computerSelection == "Scissors") {
        alert ("You fricking win! Rock beats Scissors")
    } else if (userSelection == "Paper" && computerSelection == "Rock") {
        alert ("You fricking win! Paper beats Rock")
    } else if (userSelection == "Scissors" && computerSelection == "Paper") {
        alert ("You fricking win! Scissors beat Paper")
    } else if (userSelection == "Scissors" && computerSelection == "Rock") {
        alert ("You loser! Rock beats Scissors")
    } else if (userSelection == "Paper" && computerSelection == "Scissors") {
        alert ("You loser! Scissors beat Paper")
    } else if (userSelection == "Rock" && computerSelection == "Paper") {
        alert ("You loser! Paper beats Rock")
    } else {
        alert ("Tie!")
        //I gotta check this cuz, even if the input is other like "ROck" it will take it as a tie.
    }

}





