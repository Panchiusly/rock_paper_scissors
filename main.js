
let game1 = game ();
let game2 = game ();
let game3 = game ();
let game4 = game ();
let game5 = game ();

let playRound = [game1, game2, game3, game4, game5];

let user = playerCounter ("USER"); 
let computer = playerCounter ("COMPUTER");
let tie = playerCounter ("TIE")

let winner = whoWins (); 

function whoWins () {
    if (user > computer) {
        alert ("You won the round!")
    } else if (computer > user) {
        alert ("You lost the whole thing bud")
    } else if (user == computer) {
        alert ("T'was a tie :(")
    } else {
        alert ("Error!")
    }
}

function playerCounter (player) {
    let result;
    let result2 = secondCount ();
    let resultGeneral;
    
    if (game1 == player) {
        if (game2 == player || game3 == player) {
            if (game2 == player) {
                if (game2 && game3 == player) {
                    result = 3;
                    } else {
                    result = 2;
                    }
                } else if (game3 == player) {
                    result = 2;
                } else if (game2 == player && game3 == player) {
                    result = 3; } 
        } else {
            result = 1;
        }
    } else if (game2 == player) {
        if (game3 == player) {
            result = 2;
        } else {
        result = 1;
        }
    } else if (game3 == player) {
        result = 1;
    } else {
        result = 0;
    }

    function secondCount () {
        let result;
        if (game4 == player || game5 == player) {
            if (game4 == player && game5 == player) {
                result = 2;
            } else {
                result = 1;
            } 
        } else {
        result = 0;
        }
        return result
    }
    return resultGeneral = result + result2
}

function game () {
    let input = prompt ("What's your winner hand today?")
    let userSelection = input.toUpperCase ();
    let computerSelection = getComputerChoice ();

        function getComputerChoice () {
            let hands = ["ROCK", "PAPER", "SCISSORS"]
            let computerSelection = hands [Math.floor(Math.random() * hands.length)];
            return computerSelection;
        }

        function getRoundWinner () {
            if (userSelection == "ROCK" && computerSelection == "SCISSORS") {
                alert ("You fricking win! Rock beats Scissors")
                return "USER"
            } else if (userSelection == "PAPER" && computerSelection == "ROCK") {
                alert ("You fricking win! Paper beats Rock")
                return "USER"
            } else if (userSelection == "SCISSORS" && computerSelection == "PAPER") {
                alert ("You fricking win! Scissors beat Paper")
                return "USER"
            } else if (userSelection == "SCISSORS" && computerSelection == "ROCK") {
                alert ("You loser! Rock beats Scissors")
                return "COMPUTER"
            } else if (userSelection == "PAPER" && computerSelection == "SCISSORS") {
                alert ("You loser! Scissors beat Paper")
                return "COMPUTER"
            } else if (userSelection == "ROCK" && computerSelection == "PAPER") {
                alert ("You loser! Paper beats Rock")
                return "COMPUTER"
            } else if (userSelection == computerSelection){
                alert ("Tie!")
                return "TIE"
            } else {
                alert ("Error")
            }
        }
    return getRoundWinner ();
}

// Other way of doing  it by following the assignment instructions a bit more to the letter

// let roundWinner = playround (userSelection, computerSelection);

// function playRound (userSelection, computerSelection) {
//     if (userSelection == computerSelection) {
//         return "This is a tie! Let's replay it"
//     } else if (userSelection == "PAPER" && computerSelection == "ROCK") {
//         return "You win! Paper beats Rock"
//     } else if (userSelection == "SCISSORS" && computerSelection == "PAPER") {
//         return "You win! Scissors beat Paper"
//     } else if (userSelection == "SCISSORS" && computerSelection == "ROCK") {
//         return "You lose! Rock beats Scissors"
//     } else if (userSelection == "PAPER" && computerSelection == "SCISSORS") {
//         return "You lose! Scissors beat Paper"
//     } else if (userSelection == "ROCK" && computerSelection == "PAPER") {
//         return "You lose! Paper beats Rock"
//     }  else {
//         return "Error"
//     }
// }
