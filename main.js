
let game1 = game ();
let game2 = game ();
let game3 = game ();

//user = 1; computer = 0; ties = 2;

let playRound = [game1, game2, game3];
console.log (playRound);

let user = userCounts ();

function userCounts () {
    let result;
    if (game1 == "USER") {
        if (game2 == "USER" || game3 == "USER") {
            if (game2 == "USER") {
                if (game2 && game3 == "USER") {
                    result = 3;
                    } else {
                    result = 2;
                    }
                } else if (game3 == "USER") {
                    result = 2;
                } else if (game2 == "USER" && game3 == "USER") {
                    result = 3; } 
        } else {
            result = 1;
        }
    } else if (game2 == "USER") {
        if (game3 == "USER") {
            result = 2;
        } else {
        result = 1;
        }
    } else if (game3 == "USER") {
        result = 1;
    } else {
        result = 0;
    }

    return result
}



console.log(user);

//CREATING A SUBFUNCTION 

// function userCheck () {
//     if (game1 == 1) {
//         return 1
//     } else if (game2 == 1) {
//         return 1
//     } else if (game3 == 1) {
//         return 1
//     } else {
//         return "Error102"
//     }
// }

// console.log(user);
// let roundCounter = [user, 0, 3];
// console.log(roundCounter)

function game () {
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