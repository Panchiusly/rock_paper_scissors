
let playRound = game ();
console.log (playRound);
// Ok, only in this way I can call the function 5 times. 

function game () {
    //I think everything should be inside of this function.   

    let input = prompt ("What's your winner hand today?")
    let userSelection = input.toUpperCase ();
    let computerSelection = getComputerChoice ();

    function getComputerChoice () {
        let hands = ["ROCK", "PAPER", "SCISSORS"]
        let computerSelection = hands [Math.floor(Math.random() * hands.length)];
        // I don't really understand why this Math.floor and Math.random works. But it does.
        return computerSelection;
    }

    function getRoundWinner () {
        if (userSelection == "ROCK" && computerSelection == "SCISSORS") {
            alert ("You fricking win! Rock beats Scissors")
            return 1
        } else if (userSelection == "PAPER" && computerSelection == "ROCK") {
            alert ("You fricking win! Paper beats Rock")
            return 1
        } else if (userSelection == "SCISSORS" && computerSelection == "PAPER") {
            alert ("You fricking win! Scissors beat Paper")
            return 1
        } else if (userSelection == "SCISSORS" && computerSelection == "ROCK") {
            alert ("You loser! Rock beats Scissors")
            return 0
        } else if (userSelection == "PAPER" && computerSelection == "SCISSORS") {
            alert ("You loser! Scissors beat Paper")
            return 0
        } else if (userSelection == "ROCK" && computerSelection == "PAPER") {
            alert ("You loser! Paper beats Rock")
            return 0
        } else if (userSelection == computerSelection){
            alert ("Tie!")
            return 2
            //I gotta check this cuz, even if the input is other like "ROck" it will take it as a tie.
            //Fixed by converting the answer to uppercase.
        } else {
            alert ("Error")
        }
     
    }
    return getRoundWinner ();
}



